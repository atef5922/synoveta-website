import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { generatedAssetUrls, resolveExportAsset } from './export-assets.mjs';

const exportRoot = join(process.cwd(), "out");
const errors = [];
const { readdirSync, statSync } = await import('node:fs');

const walk = (directory) => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const path = join(directory, entry.name);
  return entry.isDirectory() ? walk(path) : [path];
});

const cacheRules = join(exportRoot, '.htaccess');
if (!existsSync(cacheRules)) {
  errors.push('Missing deployment cache rules: out/.htaccess');
} else {
  const rules = readFileSync(cacheRules, 'utf8');
  for (const requiredRule of ['no-store', 'must-revalidate', 'immutable']) {
    if (!rules.includes(requiredRule)) {
      errors.push(`Deployment cache rules are missing: ${requiredRule}`);
    }
  }
}

// Every exported document must reference build assets that actually exist.
// This catches incomplete exports before they can produce an unstyled page.
if (existsSync(exportRoot)) {
  const documents = walk(exportRoot).filter((file) => file.endsWith('.html'));
  for (const document of documents) {
    const html = readFileSync(document, 'utf8');
    const assetUrls = generatedAssetUrls(html);

    if (document !== join(exportRoot, '404.html') &&
        ![...assetUrls].some((asset) => asset.endsWith('.css'))) {
      errors.push(`Exported page has no generated stylesheet: ${document}`);
    }

    for (const assetUrl of assetUrls) {
      const asset = resolveExportAsset(exportRoot, assetUrl);
      if (!asset) {
        errors.push(`Unsafe generated asset path in ${document}: ${assetUrl}`);
      } else if (!existsSync(asset) || statSync(asset).size === 0) {
        errors.push(`Missing or empty generated asset in ${document}: ${assetUrl}`);
      }
    }
  }
}

const dedicatedRoutes = [
  "access-control-turnstile",
  "conference-system",
  "led-display-solution",
  "pa-audio-system",
];

for (const route of dedicatedRoutes) {
  const file = join(exportRoot, "products", route, "index.html");

  if (!existsSync(file)) {
    errors.push(`Missing dedicated export: /products/${route}/`);
    continue;
  }

  const html = readFileSync(file, "utf8");
  if (html.includes("Request a consultation") || html.includes("Synoveta solutions")) {
    errors.push(`Generic product page overwrote dedicated route: /products/${route}/`);
  }
}

const ledIndex = join(exportRoot, "products", "led-display-solution", "index.html");
if (existsSync(ledIndex)) {
  const html = readFileSync(ledIndex, "utf8");
  for (const requiredText of ["LED Display Series", "SVL Series", "SVLC Series"]) {
    if (!html.includes(requiredText)) {
      errors.push(`LED series export is missing: ${requiredText}`);
    }
  }
}

for (const series of ["svl-series", "svlc-series"]) {
  const file = join(exportRoot, "products", "led-display-solution", series, "index.html");
  if (!existsSync(file)) errors.push(`Missing LED series export: ${series}`);
}

if (errors.length) {
  console.error("\nExport validation failed:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Export validation passed: dedicated product routes are intact.");
