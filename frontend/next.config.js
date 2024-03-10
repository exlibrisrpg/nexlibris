// @ts-check
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: `${process.env.S3_BUCKET_NAME}.s3.${process.env.S3_BUCKET_REGION}.amazonaws.com`,
      },
    ],
  },

  async redirects() {
    const baseURL = process.env.BASE_URL;

    if (!baseURL) {
      return [
        {
          source: "/",
          destination: "/www",
          permanent: true,
        },
      ];
    } else {
      return [
        {
          source: "/:page/:path*",
          has: [
            {
              type: "host",
              value: `www\.${baseURL}`,
            },
          ],
          destination: `https://morkborg.${baseURL}/:page/:path*`,
          permanent: true,
        },
      ];
    }
  },

  async rewrites() {
    const baseURL = process.env.BASE_URL;

    if (!baseURL) {
      return [];
    } else {
      return [
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: `(?<subdomain>[a-z]+)\.${baseURL}`,
            },
          ],
          destination: "/:subdomain/:path*",
        },
      ];
    }
  },
};

module.exports = withVanillaExtract(nextConfig);
