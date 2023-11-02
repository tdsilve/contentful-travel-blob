/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.ctfassets.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
    // unoptimized: true, //Without this configuration, contentful's images do not load in production
  },
};

module.exports = nextConfig;
