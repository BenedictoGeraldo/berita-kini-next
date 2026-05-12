import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "akcdn.detik.net.id",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "awsimages.detik.net.id",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.antaranews.com",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
