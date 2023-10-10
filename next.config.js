/** @type {import('next').NextConfig} */
const backendUrl = "https://bot.ptq.pw"
// const backendUrl = "http://localhost:3201"
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
            destination: `${backendUrl}/trpc/:path*`,
          },
          {
            source: '/api2/:path*',
            destination: `${backendUrl}/:path*`,
          },

        ];
      },

}

module.exports = nextConfig
