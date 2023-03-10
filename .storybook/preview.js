import './styles/index.scss';

import { GRID_CONTAINER_FLUID } from './utils/grid';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['README', 'components', 'utils'],
    },
  },
  grid: GRID_CONTAINER_FLUID,
};
