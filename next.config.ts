import type { NextConfig } from "next";

const profileImageHost = process.env.PROFILE_IMAGE_HOST;

const nextConfig: NextConfig = {
  poweredByHeader: false,
  ...(profileImageHost ? {
    images: {
      remotePatterns: [{ protocol: "https" as const, hostname: profileImageHost }],
    },
  } : {}),
};

export default nextConfig;
