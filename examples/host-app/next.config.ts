import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  rewrites: async () => {
    return [
      {
        source: "/child-next/:path*",
        destination: "http://localhost:3001/child-next/:path*", // Proxy to Child Next.js app
      },
      {
        source: "/child-nuxt/:path*",
        destination: "http://localhost:3002/child-nuxt/:path*", // Proxy to Child Nuxt.js app
      },
    ];
  },
};

export default nextConfig;
