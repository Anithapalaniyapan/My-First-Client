import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Ensure Next picks this project as the workspace root (prevents HMR misbehavior)
  outputFileTracingRoot: path.resolve(__dirname),
};

export default nextConfig;
