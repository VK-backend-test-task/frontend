import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverRuntimeConfig: { apiHost: process.env.API_HOST },
};

export default nextConfig;
