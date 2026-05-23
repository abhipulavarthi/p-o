/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/p-o',
    assetPrefix: '/p-o/',
}

module.exports = nextConfig