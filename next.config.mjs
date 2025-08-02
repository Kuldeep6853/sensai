/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",     // ✅ correct protocol
        hostname: "randomuser.me", // ✅ correct domain
      },
    ],
  },
};

export default nextConfig;
