/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS || process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,

  output: "export",

  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },

  basePath: isGithubPages ? "/ravee-portfolio" : "",

  assetPrefix: isGithubPages ? "/ravee-portfolio/" : "/",
};

export default nextConfig;