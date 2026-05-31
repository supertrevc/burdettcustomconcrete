import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standard Next.js build for Vercel (NOT static export).
  // next/image works natively on Vercel; local /public images need no remotePatterns.
  reactStrictMode: true,
  images: {
    // Portfolio photos are pre-optimized .webp; serve modern formats.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
