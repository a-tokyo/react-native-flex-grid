import { Dimensions } from 'react-native';

export declare type GridBreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export declare interface GridBreakpointsType {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

let CONTAINERS_MAX_WIDTHS_MAP = {
  xs: '100%',
  sm: '100%',
  md: '100%',
  lg: '100%',
  xl: 1140,
};

/** Grid Gutter */
let GRID_GUTTER: number = 24;

/** Grid column count */
let GRID_COL_COUNT: number = 12;

/** Grid Breakpoints object */
let GRID_BREAKPOINTS: {
  [key in GridBreakpointType]: number;
} = {
  xs: 0,
  sm: 375,
  md: 768,
  lg: 1024,
  xl: 1200,
};

let CONTAINER_PADDING_HORIZONTAL_MAP = {
  xs: 18,
  sm: 20,
  md: 40,
  lg: 48,
  xl: 48,
};

/** Grid Breakpoints keys list */
// @ts-ignore
export const GRID_BREAKPOINTS_KEYS_LIST: GridBreakpointType[] =
  Object.keys(GRID_BREAKPOINTS).reverse();

/** Set Grid Breakpoints */
export const setGridBreakpoints = (breakpoints: GridBreakpointsType) => {
  GRID_BREAKPOINTS = breakpoints;
};

/** Get current Grid Breakpoint */
export const getGridBreakpoint = (): GridBreakpointType => {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  for (let i = 0; i < GRID_BREAKPOINTS_KEYS_LIST.length; i++) {
    if (SCREEN_WIDTH >= GRID_BREAKPOINTS[GRID_BREAKPOINTS_KEYS_LIST[i]]) {
      return GRID_BREAKPOINTS_KEYS_LIST[i];
    }
  }
  return 'xs';
};

export const getGridColCount = () => GRID_COL_COUNT;
export const setGridColCount = (gridColCount) => {
  GRID_COL_COUNT = gridColCount;
  return GRID_COL_COUNT;
};

export const getGridGutter = () => GRID_GUTTER;
export const setGridGutter = (gridGutter) => {
  GRID_GUTTER = gridGutter;
  return GRID_GUTTER;
};

const SPACER = 16;
export const GUTTERS = {
  0: 0,
  1: SPACER * 0.25,
  2: SPACER * 0.5,
  3: SPACER,
  4: SPACER * 1.5,
  5: SPACER * 3,
};

export const getContainerPaddingHorizontalMap = () => CONTAINER_PADDING_HORIZONTAL_MAP;
export const setContainerPaddingHorizontalMap = (containerPaddingHorizontalMap) => {
  CONTAINER_PADDING_HORIZONTAL_MAP = containerPaddingHorizontalMap;
  return CONTAINER_PADDING_HORIZONTAL_MAP;
};

export const getContainerMaxWidthsMap = () => CONTAINERS_MAX_WIDTHS_MAP;
export const setContainerMaxWidthsMap = (containerMaxWidthsMap) => {
  CONTAINERS_MAX_WIDTHS_MAP = containerMaxWidthsMap;
  return CONTAINERS_MAX_WIDTHS_MAP;
};
