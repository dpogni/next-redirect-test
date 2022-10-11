/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: '/page1{/}?',
        destination: '/page2',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
