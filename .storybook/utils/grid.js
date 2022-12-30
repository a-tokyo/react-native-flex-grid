// ../styles/storybook-addon-grid.scss

// grids
export const GRID_BASE = {
  // storybook built in grid
  cellSize: 8,
  // storybook-addon-grid
  columns: 'var(--sb-grid-columns)', // columns count
  gap: 'var(--sb-grid-gap)', // gutter
  maxWidth: '100%', // max-width
};
export const GRID_CONTAINER = {
  ...GRID_BASE,
  gutter: 'var(--sb-grid-gutter)', // padding horizontal
  maxWidth: 'var(--sb-grid-max-width)', // max-width
};
export const GRID_CONTAINER_FLUID = {
  ...GRID_BASE,
  gutter: 'var(--sb-grid-gutter)', // padding horizontal
};
export const GRID_CONTAINER_GX_0 = {
  ...GRID_BASE,
  gutter: 0, // padding horizontal
};
