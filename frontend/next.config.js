// @ts-check

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
          source: "/:path*",
          missing: [
            {
              type: "host",
              value: `(?<subdomain>[a-z]+)\.${baseURL}`,
            },
          ],
          destination: `https://www.${baseURL}/:path*`,
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

module.exports = nextConfig;
