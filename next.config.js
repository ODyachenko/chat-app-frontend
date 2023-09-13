/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        // protocol: '*',
        // protocol: 'https',
        hostname: '*',
      },
    ],
  },
};
