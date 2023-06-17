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

// Configure the images feature
experimental: {
    images: {
      domains: ['https://static.wixstatic.com',
      'https://upload.wikimedia.org',
      'https://www.ctelecoms.com.sa',
      'https://www.freecodecamp.org',
      'https://root-it.uk',
      'data:image',
      'https://lh3.googleusercontent.com'], // Add the domains from which you will load images
    },
  },
};

  
  module.exports = nextConfig;
  