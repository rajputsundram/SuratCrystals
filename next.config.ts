import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com ',
      
        
      },
      {
        protocol: 'https',
        hostname: 'www.suratcrystals.com',
      },
      
    ],
  },
};

export default nextConfig;
