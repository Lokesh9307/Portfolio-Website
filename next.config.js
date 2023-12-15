/** @type {import('next').NextConfig} */
const nextConfig = {
    devServer: {
        host: '0.0.0.0',
        port: 3000,
},
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