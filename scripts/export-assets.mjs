import path from 'node:path';

export function generatedAssetUrls(html) {
  // Stop at backslashes too: Next.js embeds escaped quotes in inline RSC data.
  return new Set([...html.matchAll(/\/_next\/static\/[^\s<>'?"\\]+/g)]
    .map(([url]) => decodeURIComponent(url)));
}

export function resolveExportAsset(root, url, paths = path) {
  if (!url.startsWith('/_next/static/') || url.includes('\\')) return null;
  const asset = paths.resolve(root, url.slice(1));
  const relative = paths.relative(paths.resolve(root), asset);
  if (!relative || relative === '..' || relative.startsWith(`..${paths.sep}`) || paths.isAbsolute(relative)) return null;
  return asset;
}
