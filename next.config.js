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
            source: '^/trpc/:path*',
            destination: 'https://bot.ptq.pw/trpc/:path*',
          },
          {
            source: '^/api2/:path*',
            destination: 'https://bot.ptq.pw/:path*',
          },

        ];
      },

}

module.exports = nextConfig
