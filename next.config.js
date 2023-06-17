/** @type {import('next').NextConfig} */
const nextConfig = {
    // Set the assetPrefix to the repository name
    // Replace 'repository-name' with your actual repository name
    // Make sure to include the trailing slash '/'
    assetPrefix: '/portfolio/',
  
    // Specify basePath if your application is not hosted at the root of the domain
    // For example, if your GitHub Pages URL is https://username.github.io/my-app/
    // Set basePath to '/my-app'
  
    // Configure the webpack publicPath to match the assetPrefix
    // This is required for correct asset loading on GitHub Pages
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.output.publicPath = `${nextConfig.assetPrefix || ''}/_next/`;
      return config;
    },
  };
  
  module.exports = nextConfig;
  