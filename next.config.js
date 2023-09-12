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

}

module.exports = nextConfig
