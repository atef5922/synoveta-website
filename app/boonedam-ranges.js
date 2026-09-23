export const boonedamRanges = {
  "tripod-turnstiles": {
    title: "Tripod Turnstiles",
    copy: "Compact Boon Edam tripod turnstiles for reliable pedestrian access control and efficient visitor flow.",
    products: [
      {
        slug: "trilock-60",
        name: "Trilock 60",
        image: "/product-assets/turnstile-gate/Boon Edam/Tripod-turnstiles/Trilock 60.webp",
        summary: "A compact Boon Edam tripod turnstile for reliable access control and efficient pedestrian flow.",
      },
      {
        slug: "trilock-75",
        name: "Trilock 75",
        image: "/product-assets/turnstile-gate/Boon Edam/Tripod-turnstiles/Trilock 75.webp",
        summary: "A versatile tripod turnstile designed for secure, controlled entry in busy public and commercial spaces.",
      },
      {
        slug: "trilock-900",
        name: "Trilock 900",
        image: "/product-assets/turnstile-gate/Boon Edam/Tripod-turnstiles/Trilock 900.webp",
        summary: "A robust Boon Edam tripod turnstile solution for dependable access management in demanding locations.",
      },
    ],
  },
  "full-height-turnstiles": {
    title: "Full-Height Turnstiles",
    copy: "Secure Boon Edam full-height turnstiles for perimeter protection, restricted sites and demanding environments.",
    products: [
      {
        slug: "turnlock-100",
        name: "Turnlock 100",
        image: "/product-assets/turnstile-gate/Boon Edam/full-height-turnstiles/Turnlock 100.webp",
        summary: "A secure full-height turnstile for controlling pedestrian entry at restricted and perimeter-protected sites.",
      },
      {
        slug: "turnlock-150",
        name: "Turnlock 150",
        image: "/product-assets/turnstile-gate/Boon Edam/full-height-turnstiles/Turnlock 150.webp",
        summary: "A durable Boon Edam full-height entrance solution engineered for dependable high-security access control.",
      },
      {
        slug: "turnlock-200",
        name: "Turnlock 200",
        image: "/product-assets/turnstile-gate/Boon Edam/full-height-turnstiles/Turnlock 200.webp",
        summary: "A robust full-height turnstile for secure pedestrian management in industrial and sensitive environments.",
      },
    ],
  },
};

export const boonedamProductParams = Object.entries(boonedamRanges).flatMap(([subcategory, range]) =>
  range.products.map(({ slug: productSlug }) => ({ subcategory, productSlug }))
);
