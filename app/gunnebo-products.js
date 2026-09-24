const base = "/product-assets/turnstile-gate/gunnebo";

export const gunneboRanges = {
  "tripod-turnstiles": {
    title: "Tripod Turnstiles",
    copy: "Compact and dependable Synoveta tripod turnstiles for efficient pedestrian flow and controlled entry.",
    products: [
      {
        slug: "slimstile-ev",
        name: "SlimStile EV",
        image: `${base}/Tripod-turnstiles/SlimStile-EV-Tripod-turnstile-gaet.png`,
        summary: "A compact tripod turnstile engineered for smooth, reliable access control in busy environments.",
      },
      {
        slug: "gunnebo-tripod-turnstile",
        name: "Synoveta Tripod Turnstile",
        image: `${base}/Tripod-turnstiles/tripod-turnstiles-gunnebo-entrance-control.jpg`,
        summary: "A versatile Synoveta entrance-control solution for secure and efficient pedestrian access.",
      },
    ],
  },
  "full-height-turnstiles": {
    title: "Full-Height Turnstiles",
    copy: "Robust Synoveta full-height turnstiles for high-security outdoor, industrial and restricted-area access.",
    products: [
      {
        slug: "90-ev-double-with-canopy",
        name: "90 EV Double with Canopy",
        image: `${base}/full-height-turnstiles/90-EV-DOUBLE-WITH-CANOPY.1059.png`,
        summary: "A double full-height turnstile with canopy protection for controlled outdoor entrances.",
      },
      {
        slug: "revolite",
        name: "RevoLite",
        image: `${base}/full-height-turnstiles/RevoLite_.png`,
        summary: "A streamlined full-height entrance solution balancing security, durability and pedestrian flow.",
      },
      {
        slug: "rotasec-hs",
        name: "RotaSec HS",
        image: `${base}/full-height-turnstiles/RotaSec-HS-1.png`,
        summary: "A high-security full-height turnstile designed for restricted and perimeter-controlled locations.",
      },
      {
        slug: "rotasec",
        name: "RotaSec",
        image: `${base}/full-height-turnstiles/ROtaSec_.png`,
        summary: "A robust Synoveta full-height turnstile for dependable access control in demanding sites.",
      },
      {
        slug: "rotatech",
        name: "RotaTech",
        image: `${base}/full-height-turnstiles/ROtaTech_.png`,
        summary: "A durable full-height turnstile built for secure, high-volume pedestrian management.",
      },
      {
        slug: "rotasec-entrance-control",
        name: "RotaSec Entrance Control",
        image: `${base}/full-height-turnstiles/turnstiles-gunnebo-entrance-control-rotasec.jpg`,
        summary: "Synoveta RotaSec entrance control for secure passage through sensitive and restricted areas.",
      },
    ],
  },
};

export const gunneboProductParams = Object.entries(gunneboRanges).flatMap(([subcategory, range]) =>
  range.products.map(({ slug: productSlug }) => ({ subcategory, productSlug }))
);
