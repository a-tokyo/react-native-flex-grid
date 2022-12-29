/** Grid breakpoints available */
export declare type GridBreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/** Grid configuration type */
export declare interface GRID_CONFIG_TYPE {
  breakpoints: { [key in GridBreakpointType]: number };
  colCount: number;
  gutters: { [key: number]: number };
  containerMaxWidths: { [key in GridBreakpointType]: number | string };
  containerPaddingsHorizontal: { [key in GridBreakpointType]: number | string };
}

/** Grid configuration input type for overrides */
export declare interface GRID_CONFIG_INPUT_TYPE {
  breakpoints?: { [key in GridBreakpointType]: number };
  colCount?: number;
  gutters?: { [key: number]: number };
  containerMaxWidths?: { [key in GridBreakpointType]: number | string };
  containerPaddingsHorizontal?: {
    [key in GridBreakpointType]: number | string;
  };
}

/** Base spacer -- equivalent to HTML font-size and rem */
export const SPACER = 16;

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
    xs: 16,
    sm: 20,
    md: 40,
    lg: 48,
    xl: 48,
  },
};

/** Get Grid configuration */
export const getConfig = (): GRID_CONFIG_TYPE => GRID_CONFIG;
/** Set Grid configuration - extends existing configuration */
export const setConfig = (
  newConfig: GRID_CONFIG_INPUT_TYPE,
): GRID_CONFIG_TYPE => {
  GRID_CONFIG = {
    ...GRID_CONFIG,
    ...newConfig,
  };
  return GRID_CONFIG;
};
