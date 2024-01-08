const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

const config = {
  projectRoot: `${__dirname}/../../../../..`,
  resolver: {
    sourceExts: ['ts', 'tsx', 'js', 'json'],
    // platforms: ['ios', 'android'],
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        inlineRequires: true,
      },
    }),
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
