import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 本地端口设置为 3008
  serverRuntimeConfig: {
    port: 3008,
  },
};

export default nextConfig;
