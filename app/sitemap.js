import { categories } from "./data";
import { gunneboProductParams } from "./gunnebo-products";
import { boonedamProductParams } from "./boonedam-ranges";

export const dynamic = "force-static";

const siteUrl = "https://synoveta.com";
const withSlash = (path = "") => `${siteUrl}${path === "/" ? "" : path}/`;

export default function sitemap() {
  const now = new Date();
  const staticPages = [
    ["/", 1, "weekly"],
    ["/products", 0.9, "weekly"],
    ["/solutions", 0.8, "monthly"],
    ["/about", 0.7, "monthly"],
    ["/partners", 0.7, "monthly"],
    ["/contact", 0.7, "monthly"],
    ["/products/access-control-turnstile/gunnebo", 0.9, "weekly"],
    ["/products/access-control-turnstile/gunnebo/tripod-turnstiles", 0.8, "weekly"],
    ["/products/access-control-turnstile/gunnebo/full-height-turnstiles", 0.8, "weekly"],
    ["/products/access-control-turnstile/boonedam", 0.9, "weekly"],
    ["/products/access-control-turnstile/boonedam/tripod-turnstiles", 0.8, "weekly"],
    ["/products/access-control-turnstile/boonedam/full-height-turnstiles", 0.8, "weekly"],
    ["/products/conference-system/digital-wired-conference", 0.8, "weekly"],
    ["/products/conference-system/digital-wired-conference/sv-dwc-c200s", 0.7, "monthly"],
    ["/products/conference-system/digital-wired-conference/sv-dwc-m230c", 0.7, "monthly"],
    ["/products/conference-system/digital-wired-conference/sv-dwc-m230d", 0.7, "monthly"],
    ["/products/conference-system/digital-wired-conference/sv-dwc-m805c", 0.7, "monthly"],
    ["/products/conference-system/digital-wired-conference/sv-dwc-m805d", 0.7, "monthly"],
    ["/products/conference-system/digital-wired-conference/svh-dwc-6200c", 0.7, "monthly"],
    ["/products/conference-system/digital-wired-conference/svh-dwc-6200d", 0.7, "monthly"],
    ["/products/conference-system/digital-wired-conference/svh-dwc-6500msr", 0.7, "monthly"],
    ["/products/conference-system/digital-wired-conference/svh-dwc-cs500c", 0.7, "monthly"],
    ["/products/conference-system/wifi-wireless-conference", 0.8, "weekly"],
    ["/products/conference-system/wifi-wireless-conference/sv-dwc-c800s", 0.7, "monthly"],
    ["/products/conference-system/wifi-wireless-conference/sv-wwc-m809c", 0.7, "monthly"],
    ["/products/conference-system/wifi-wireless-conference/sv-wwc-m809d", 0.7, "monthly"],
    ["/products/conference-system/wifi-wireless-conference/sv-wwc-m810c", 0.7, "monthly"],
    ["/products/conference-system/wifi-wireless-conference/sv-wwc-m810d", 0.7, "monthly"],
    ["/products/led-display-solution/svl-series", 0.8, "weekly"],
    ["/products/led-display-solution/svlc-series", 0.8, "weekly"],
  ];

  const categoryPages = categories.map(({ slug }) => ({
    url: withSlash(`/products/${slug}`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const gunneboProducts = gunneboProductParams.map(({ subcategory, productSlug }) => ({
    url: withSlash(`/products/access-control-turnstile/gunnebo/${subcategory}/${productSlug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const boonedamProducts = boonedamProductParams.map(({ subcategory, productSlug }) => ({
    url: withSlash(`/products/access-control-turnstile/boonedam/${subcategory}/${productSlug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticPages.map(([path, priority, changeFrequency]) => ({
      url: withSlash(path),
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...categoryPages,
    ...gunneboProducts,
    ...boonedamProducts,
  ];
}




