/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ['utfs.io']
  // }
  images: {
    remotePatterns: [
      {
        hostname: "utfs.io",
      },
    ],
  },
};

export default nextConfig;
