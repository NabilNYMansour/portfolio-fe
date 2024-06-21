module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { // Using production STRAPI
        protocol: "https",
        hostname: "admin.nabilmansour.com",
      }
    ]
  },
}