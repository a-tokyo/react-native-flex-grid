import React from 'react';
import { Dimensions } from 'react-native';

export declare type GridBreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export declare interface GridBreakpointsType {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

/** Grid Gutter */
let GRID_GUTTER: number = 24;

/** Grid column count */
let GRID_COL_COUNT: number = 12;

/** Grid Breakpoints object */
let GRID_BREAKPOINTS: {
  [key in GridBreakpointType]: number;
} = {
  xs: 0,
  sm: 0,
  md: 768,
  lg: 1024,
  xl: 1200,
};

/** Grid Breakpoints keys list */
// @ts-ignore
const GRID_BREAKPOINTS_KEYS_LIST: GridBreakpointType[] =
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

export const getGridColCount = (gridColCount) => {
  GRID_COL_COUNT = gridColCount;
  return GRID_COL_COUNT;
};
export const setGridColCount = () => GRID_COL_COUNT;

export const getGridGutter = (gridGutter) => {
  GRID_GUTTER = gridGutter;
  return GRID_GUTTER;
};
export const setGridGutter = () => GRID_GUTTER;

// @todo container widths

///

const _propsToStyle = (props) => {}

const _toPercent = (num: number): string => `${num * 100}%`;

export const getColWidth = (
  props,
): string | undefined => {
  const gridBreakpoint = getGridBreakpoint();
  const SCREEN_WIDTH = Dimensions.get('window').width;
  console.log('XXXXXX', gridBreakpoint, SCREEN_WIDTH)
  // return undefined;
  switch (gridBreakpoint) {
    case 'xs':
      if (props.xs) {
        if (props.xs === 'auto') {
          return undefined
        }
        return _toPercent(props.xs / GRID_COL_COUNT);
      } else {
        return undefined;
      }
    case 'sm':
      if (props.sm) {
        if (props.sm === 'auto') {
          return undefined
        }
        return _toPercent(props.sm / GRID_COL_COUNT);
      } else if (props.xs) {
        if (props.xs === 'auto') {
          return undefined
        }
        return _toPercent(props.xs / GRID_COL_COUNT);
      } else {
        return undefined;
      }
    case 'md':
      if (props.md) {
        if (props.md === 'auto') {
          return undefined
        }
        return _toPercent(props.md / GRID_COL_COUNT);
      } else if (props.sm) {
        if (props.sm === 'auto') {
          return undefined
        }
        return _toPercent(props.sm / GRID_COL_COUNT);
      } else if (props.xs) {
        if (props.xs === 'auto') {
          return undefined
        }
        return _toPercent(props.xs / GRID_COL_COUNT);
      } else {
        return undefined;
      }
    case 'lg':
      if (props.lg) {
        if (props.lg === 'auto') {
          return undefined
        }
        return _toPercent(props.lg / GRID_COL_COUNT);
      } else if (props.md) {
        if (props.md === 'auto') {
          return undefined
        }
        return _toPercent(props.md / GRID_COL_COUNT);
      } else if (props.sm) {
        if (props.sm === 'auto') {
          return undefined
        }
        return _toPercent(props.sm / GRID_COL_COUNT);
      } else if (props.xs) {
        if (props.xs === 'auto') {
          return undefined
        }
        return _toPercent(props.xs / GRID_COL_COUNT);
      } else {
        return undefined;
      }
    case 'xl':
      if (props.xl) {
        if (props.xl === 'auto') {
          return undefined
        }
        return _toPercent(props.xl / GRID_COL_COUNT);
      } else if (props.lg) {
        if (props.lg === 'auto') {
          return undefined
        }
        return _toPercent(props.lg / GRID_COL_COUNT);
      } else if (props.md) {
        if (props.md === 'auto') {
          return undefined
        }
        return _toPercent(props.md / GRID_COL_COUNT);
      } else if (props.sm) {
        if (props.sm === 'auto') {
          return undefined
        }
        return _toPercent(props.sm / GRID_COL_COUNT);
      } else if (props.xs) {
        if (props.xs === 'auto') {
          return undefined
        }
        return _toPercent(props.xs / GRID_COL_COUNT);
      } else {
        return undefined;
      }
    default:
      return undefined;
  }
};

