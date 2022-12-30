module.exports = {
  stories: [
    // replace with '../src/**/*.stories.*' once storybook supports mdx syntax for react-native
    '../src/**/*.stories.?(ts|tsx|js|jsx)',
  ],
  addons: [
    '@storybook/addon-ondevice-notes',
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-backgrounds',
    '@storybook/addon-ondevice-actions',
  ],
};
