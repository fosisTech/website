// React dev mode rebuilds callstacks with eval(). Production never needs it.
const scriptSrc = process.env.NODE_ENV === "development" ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'" : "script-src 'self' 'unsafe-inline'";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "www.fosis.org.uk" }],
        destination: "https://fosis.org.uk/",
        permanent: true,
      },
      {
        source: "/:path+",
        has: [{ type: "host", value: "www.fosis.org.uk" }],
        destination: "https://fosis.org.uk/:path+/",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              scriptSrc,
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob:",
              "font-src 'self'",
              "frame-src https://luma.com https://tally.so",
              "object-src 'none'",
              "base-uri 'none'",
              "frame-ancestors 'none'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig; 