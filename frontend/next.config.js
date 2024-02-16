// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
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
