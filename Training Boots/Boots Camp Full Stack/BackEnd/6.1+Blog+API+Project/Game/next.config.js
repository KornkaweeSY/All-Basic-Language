const { withNextDevtools } = require('@next-devtools/core/plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,
}

module.exports = withNextDevtools(nextConfig)
