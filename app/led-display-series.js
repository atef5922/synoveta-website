export const ledDisplaySeries = [
  {
    slug: "svl-series",
    name: "SVL Series",
    image: "/LED-Display/SVL-Series/SVL-Series.webp",
    bannerImage: "/LED-Display/SVL-Series/SVL-Series-hero-v2.webp",
    lifestyleImage: "/LED-Display/SVL-Series/SMD-LED-display-for-corporae-lobby.webp",
    useCases: [
      {
        title: "Indoor Conference Rooms",
        image: "/LED-Display/SVL-Series/indoor-led-display-for-conference-room.webp",
        alt: "SVL indoor LED display installed in a conference room",
        copy: "Fine-pitch presentation displays for meetings, collaboration and clear close-viewing content.",
      },
      {
        title: "Outdoor LED Displays",
        image: "/LED-Display/SVL-Series/outdoor-eld-display.webp",
        alt: "SVL outdoor LED display installation",
        copy: "Large-format outdoor visual communication designed for longer viewing distances and open environments.",
      },
    ],
    moduleType: "SMD LED display module",
    applications: ["Indoor", "Outdoor"],
    indoorPixelPitches: ["1.25", "1.538", "1.839", "1.86", "2", "2.5", "3", "3.076"],
    outdoorPixelPitches: ["3", "3.076", "4", "5", "6", "8", "10"],
    pixelPitches: ["1.25", "1.538", "1.839", "1.86", "2", "2.5", "3", "3.076", "4", "5", "6", "8", "10"],
  },
  {
    slug: "svlc-series",
    name: "SVLC Series",
    image: "/LED-Display/SVLC-Series/SVLC-Series.webp",
    bannerImage: "/LED-Display/SVLC-Series/SVLC-Series-hero-v2.png",
    lifestyleImage: "/LED-Display/SVLC-Series/COB-LED-display-in-office.webp",
    useCases: [
      {
        title: "Retail Stores",
        image: "/LED-Display/SVLC-Series/COB-led- dispaly-for-retail-store.webp",
        alt: "COB LED display installed in a premium retail store",
        copy: "High-impact visual merchandising and immersive digital content for modern retail spaces.",
      },
      {
        title: "Conference Halls",
        image: "/LED-Display/SVLC-Series/COB-led- dispaly-for-conference -hall.webp",
        alt: "COB LED display installed in a conference hall",
        copy: "Clear presentations, video collaboration and large-format communication for professional venues.",
      },
    ],
    moduleType: "Flip-chip COB LED display module",
    moduleSize: "320 × 160 mm",
    pixelPitches: ["1.25", "1.538", "1.86"],
  },
];

export const getLedDisplaySeries = (slug) => ledDisplaySeries.find((series) => series.slug === slug);
