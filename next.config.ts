import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Ensure Next picks this project as the workspace root (prevents HMR misbehavior)
  outputFileTracingRoot: path.resolve(__dirname),
  // Add experimental features to handle React 19 compatibility
  experimental: {
    reactCompiler: false,
  },
  // Add image optimization settings
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
