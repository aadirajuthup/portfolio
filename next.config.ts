import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Add this line
  },
  eslint: {
    ignoreDuringBuilds: true, // Add this line
  },
  output: 'export' // Add this line
};

export default nextConfig;