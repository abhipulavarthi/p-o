/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,

    images: {
        unoptimized: true,
    },

    basePath: '/p-o',
    assetPrefix: '/p-o/',
}

module.exports = nextConfig