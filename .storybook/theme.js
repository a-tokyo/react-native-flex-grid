import { create } from '@storybook/theming';

import packageJson from '../package.json';

/**
 * Storybook theme
 *
 * https://storybook.js.org/docs/react/configure/theming
 */
export default create({
  base: 'light',
  brandTitle: 'react-native-flex-grid',
  brandUrl: packageJson.repository.url.replace('.git', ''),
  // brandImage: '',
  // brandTarget: '_self', // open in same tab
});
