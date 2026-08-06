import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Avoid auto-generating AGENTS.md / CLAUDE.md in the project root.
  agentRules: false,
};

export default nextConfig;
