/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "static.photos" },
      { protocol: "https", hostname: "static.photos" }
    ]
  }
};

export default nextConfig;
