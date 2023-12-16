/** @type {import('next').NextConfig} */
const nextConfig = {
    
}

module.exports = nextConfig

module.exports = {
    reactStrictMode: true,
    webpack: (config) => {
      config.module.rules.push({
        test: /\.pdf$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      });
      return config;
    }
} 