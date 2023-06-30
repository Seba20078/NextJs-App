/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['api.dicebear.com'],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
