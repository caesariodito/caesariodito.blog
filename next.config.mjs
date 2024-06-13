/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/caesariodito/blog-posts/main/images/**',
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://sesars-journey.super.site/',
        permanent: true,
      }
    ]
  }
};

export default nextConfig;
