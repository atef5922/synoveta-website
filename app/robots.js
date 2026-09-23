export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next/", "/api/"],
    },
    sitemap: "https://synoveta.com/sitemap.xml",
    host: "https://synoveta.com",
  };
}
