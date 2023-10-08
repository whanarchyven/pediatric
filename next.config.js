/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    typescript:{
        ignoreBuildErrors: true,
    },
    trailingSlash: true,
    experimental: {
        serverActions: true,
    },
    async rewrites() {
        return [
          {
            source: '/trpc/:path*',
            destination: 'https://rnxmo-206-189-53-94.a.free.pinggy.online/trpc/:path*',
          },
        ];
      },

}

module.exports = nextConfig
