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
            destination: 'https://rnpyu-194-135-222-130.a.free.pinggy.online/trpc/:path*',
          },
          {
            source: '^/api2/:path*',
            destination: 'https://rnpyu-194-135-222-130.a.free.pinggy.online/:path*',
          },

        ];
      },

}

module.exports = nextConfig
