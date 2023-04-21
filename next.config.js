/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'codecraft.ir',
        port: '',
        pathname: '/online-course/wp-content/**',
      },
    ],
  },
 }

module.exports = nextConfig

