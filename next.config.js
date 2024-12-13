const nextConfig = {
  images: {
    domains: [
      "assets.tina.io",
      "experienciasfutaleufu.vercel.app",
      "cdn.b12.io",
    ], // Add all allowed domains
  },
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
};

module.exports = nextConfig;
