const withOffline = require('next-offline')
/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig
module.exports = withOffline(nextConfig)
