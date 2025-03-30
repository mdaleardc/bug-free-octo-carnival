/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    //unoptimized: true,  Disables Next.js image optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

export default nextConfig;