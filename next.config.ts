import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    domains: ["hlzfhmneaphariqoewir.supabase.co"],
    remotePatterns: [
      {
        hostname: "www.facebook.com",
      },
      {
        protocol: "https",
        hostname: "hlzfhmneaphariqoewir.supabase.co",
      },
      {
        protocol: "https",
        hostname: "placehold.net",
      },
    ],
  },
};

export default nextConfig;
