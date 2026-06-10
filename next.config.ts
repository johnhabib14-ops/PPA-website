import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Avoid picking a parent folder lockfile when other lockfiles exist on the machine.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
