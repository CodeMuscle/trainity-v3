/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: '',
        hostname: '',
        port: '',
        pathname: '/public/**',
      },
    ],
  },
};

module.exports = nextConfig;
