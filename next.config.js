/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "custom",
    loaderFile: "./netlify-image-loader.js",
  },
};

module.exports = nextConfig;
