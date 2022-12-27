const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
    '@storybook/addon-storysource',
    'storybook-addon-grid',
    '@storybook/addon-jest',
    'storybook-addon-designs',
    '@storybook/addon-react-native-web',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Manually handle styles loading to achieve scss modules + imported s?css frameworks
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: true, // use modules for .module.s?css if this is not enabled, importing bootstrap doesn't work
              localIdentName: '[folder]__[local]__[hash:base64:5]',
            },
          },
        },
        'resolve-url-loader',
        'postcss-loader',
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
};
