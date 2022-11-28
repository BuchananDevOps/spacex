const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})
const runtimeCaching = require("next-pwa/cache")

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  runtimeCaching,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "i.imgur.com",
      "imgur.com",
      "photos.marinetraffic.com",
      "images2.imgbox.com",
      "farm5.staticflickr.com",
      "farm1.staticflickr.com",
      "live.staticflickr.com"
    ],
    remotePatterns: [
      {
        protocol: "https:",
        hostname: "**.imgur.com",
      },
    ],
  },
}

module.exports = () => {
  const plugins = [withBundleAnalyzer, withPWA]
  return plugins.reduce((acc, plugin) => plugin(acc), {
    ...nextConfig,
  })
}
