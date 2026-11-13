import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Content is read from a local SQLite catalog at request time; no Cache Components needed.
  poweredByHeader: false,
  images: { unoptimized: true },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
