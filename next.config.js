const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
module.exports = (phase) => ({
  output: "export",
  trailingSlash: true,
  // Keep HMR chunks separate from production build chunks. This prevents a
  // running dev server and `next build` from corrupting the same Webpack cache.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
  images: {
    unoptimized: true,
  },
});
