/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    unoptimized: true, // Disable image optimization to avoid sharp issues
  },
};

export default nextConfig;