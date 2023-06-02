/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
    remotePatterns: [
      {
        protocol: '',
        hostname: '',
        port: '',
        pathname: '',
      },
    ],
};

module.exports = nextConfig;
