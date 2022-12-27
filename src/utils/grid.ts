import { Dimensions } from 'react-native';

export declare type GridBreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export declare interface GridBreakpointsType {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export declare interface GRID_CONFIG_TYPE {
  breakpoints: { [key in GridBreakpointType]: number };
  colCount: number;
  gutters: { [key: number]: number };
  containerMaxWidths: { [key in GridBreakpointType]: number | string };
  containerPaddingsHorizontal: { [key in GridBreakpointType]: number | string };
}

/** Base spacer -- equivalent to HTML font-size and rem */
const SPACER = 16;

/** Grid configuration */
let GRID_CONFIG: GRID_CONFIG_TYPE = {
  /** Grid Breakpoints */
  breakpoints: {
    xs: 0,
    sm: 375,
    md: 768,
    lg: 1024,
    xl: 1200,
  },
  /** Grid column count */
  colCount: 12,
  /** Common gutters used */
  gutters: {
    0: 0,
    1: SPACER * 0.25,
    2: SPACER * 0.5,
    3: SPACER,
    4: SPACER * 1.5,
    5: SPACER * 3,
  },
  /** Container max widths */
  containerMaxWidths: {
    xs: '100%',
    sm: '100%',
    md: '100%',
    lg: '100%',
    xl: 1140,
  },
  /** Container paddings horizontal */
  containerPaddingsHorizontal: {
    xs: 18,
    sm: 20,
    md: 40,
    lg: 48,
    xl: 48,
  },
};

/** Get Grid configuration */
export const getConfig = (): GRID_CONFIG_TYPE => GRID_CONFIG;
/** Set Grid configuration - extends existing configuration */
export const setConfig = (newConfig): GRID_CONFIG_TYPE => {
  GRID_CONFIG = {
    ...GRID_CONFIG,
    ...newConfig,
  };
  return GRID_CONFIG;
};

/** Grid Breakpoints keys list */
// @ts-ignore
export const GRID_BREAKPOINTS_KEYS_LIST: GridBreakpointType[] = Object.keys(
  GRID_CONFIG.breakpoints,
).reverse();

/** Get current Grid Breakpoint */
export const getGridBreakpoint = (): GridBreakpointType => {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  for (let i = 0; i < GRID_BREAKPOINTS_KEYS_LIST.length; i += 1) {
    if (
      SCREEN_WIDTH >= GRID_CONFIG.breakpoints[GRID_BREAKPOINTS_KEYS_LIST[i]]
    ) {
      return GRID_BREAKPOINTS_KEYS_LIST[i];
    }
  }
  return GRID_BREAKPOINTS_KEYS_LIST[0];
};
