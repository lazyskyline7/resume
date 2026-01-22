/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: process.env.BASE_PATH || '',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.jsonc$/,
      use: [
        {
          loader: 'jsonc-loader',
        },
      ],
    });
    return config;
  },
  turbopack: {
    rules: {
      '*.jsonc': {
        loaders: ['jsonc-loader'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
