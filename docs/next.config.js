module.exports = {
  basePath: process.env.CI
    ? require('../package.json').homepage.split('github.io')[1]
    : '',
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config;
  },
};
