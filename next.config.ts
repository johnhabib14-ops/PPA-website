import type { NextConfig } from "next";
import path from "path";

const mapBase = "/research/maternal-advocacy-project";

const nextConfig: NextConfig = {
  // Avoid picking a parent folder lockfile when other lockfiles exist on the machine.
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [
      { source: `${mapBase}/foundations`, destination: `${mapBase}#research-foundations`, permanent: true },
      { source: `${mapBase}/madres`, destination: `${mapBase}#madres`, permanent: true },
      { source: `${mapBase}/israel`, destination: `${mapBase}#october7`, permanent: true },
      { source: `${mapBase}/ukraine`, destination: `${mapBase}#ukraine`, permanent: true },
      { source: `${mapBase}/study`, destination: `${mapBase}#our-study`, permanent: true },
      { source: `${mapBase}/findings`, destination: `${mapBase}#findings`, permanent: true },
      { source: `${mapBase}/media`, destination: `${mapBase}#media`, permanent: true },
    ];
  },
};

export default nextConfig;
