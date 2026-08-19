// next.config.mjs or next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/images/**', // Wildcard for all subpaths under images
      },
      {
        protocol: 'https',
        hostname: '*.images.unsplash.com', // Wildcard for subdomains
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};

export default nextConfig;