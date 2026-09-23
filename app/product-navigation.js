export const categoryBrands = {
  "access-control-turnstile": [{
    name: "Gunnebo",
    subcategories: ["Tripod Turnstiles", "Full-Height Turnstiles"],
  }, {
    name: "Boon Edam",
    slug: "boonedam",
    subcategories: ["Tripod Turnstiles", "Full-Height Turnstiles"],
  }],
  "conference-system": ["Digital Wired Conference", "WIFI Wireless Conference"],
  "led-display-solution": ["SVL Series", "SVLC Series"],
};

export const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
export const brandName = (brand) => typeof brand === "string" ? brand : brand.name;
export const brandHref = (categorySlug, brand) => `/products/${categorySlug}/${typeof brand === "string" ? slugify(brand) : (brand.slug || slugify(brand.name))}/`;
export const subcategoryHref = (categorySlug, brand, subcategory) => `${brandHref(categorySlug, brand)}${slugify(subcategory)}/`;
