/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["res.cloudinary.com"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          //   {
          //     key: "Content-Security-Policy",
          //     value: "default-src 'self'; script-src 'self'; style-src 'self';",
          //   },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "no-referrer",
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(self)",
          },
          {
            key: "Cache-Control",
            value: "no-store",
          },
          {
            key: "Expect-CT",
            value: "max-age=86400, enforce",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
