import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname, "..", ".."),
    resolveAlias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  /* config options here */
};

export default nextConfig;
