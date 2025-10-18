/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/wp/:path*',        // frontend URL
        destination: 'https://jito-club.lovestoblog.com/wp-json/wp/:path*', // your WP URL
      },
    ];
  },
};

export default nextConfig;
