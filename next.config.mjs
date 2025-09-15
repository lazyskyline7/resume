/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: process.env.BASE_PATH || '',
};

export default nextConfig;
