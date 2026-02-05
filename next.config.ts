import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static HTML export
  images: {
    unoptimized: true,  // Required for static export
  },
  // Uncomment if deploying to a subdirectory:
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio',
};

export default nextConfig;
