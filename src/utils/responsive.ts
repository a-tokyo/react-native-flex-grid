import { Dimensions } from 'react-native';

import { GridBreakpointType, getConfig } from './grid';

/** Grid Breakpoints keys list */
// @ts-ignore
export const GRID_BREAKPOINTS_KEYS_LIST_DESC: GridBreakpointType[] =
  Object.keys(getConfig().breakpoints).reverse();

/** Get current Grid Breakpoint */
export const getGridBreakpoint = (
  SCREEN_WIDTH?: number,
): GridBreakpointType => {
  const PARSED_SCREEN_WIDTH = SCREEN_WIDTH ?? Dimensions.get('window').width;
  for (let i = 0; i < GRID_BREAKPOINTS_KEYS_LIST_DESC.length; i += 1) {
    if (
      PARSED_SCREEN_WIDTH >=
      getConfig().breakpoints[GRID_BREAKPOINTS_KEYS_LIST_DESC[i]]
    ) {
      return GRID_BREAKPOINTS_KEYS_LIST_DESC[i];
    }
  }
  return GRID_BREAKPOINTS_KEYS_LIST_DESC[0];
};

/** Media Query to check for the grid breakpoint matching current screen size. */
export const mediaQuery = ({
  up,
  down,
  exact,
}: {
  up?: GridBreakpointType;
  down?: GridBreakpointType;
  exact?: GridBreakpointType;
}) => {
  /** current grid breakpoint */
  const breakpoint = getGridBreakpoint();
  if (exact) {
    // handle exact case
    if (breakpoint === exact) {
      return true;
    }
  } else if (down) {
    // handle down case
    if (
      GRID_BREAKPOINTS_KEYS_LIST_DESC.indexOf(breakpoint) >=
      GRID_BREAKPOINTS_KEYS_LIST_DESC.indexOf(down)
    ) {
      return true;
    }
  } else if (up) {
    // handle up case
    if (
      GRID_BREAKPOINTS_KEYS_LIST_DESC.indexOf(breakpoint) <=
      GRID_BREAKPOINTS_KEYS_LIST_DESC.indexOf(down)
    ) {
      return true;
    }
  }
  // no match found
  return false;
};

/** Media Query to check for the grid breakpoint matching current screen size and return style */
export const mediaQueryStyle = ({
  up,
  down,
  exact,
  style,
}: {
  up?: GridBreakpointType;
  down?: GridBreakpointType;
  exact?: GridBreakpointType;
  style: any;
}) => {
  /** current grid breakpoint */
  const breakpoint = getGridBreakpoint();
  if (exact) {
    // handle exact case
    if (breakpoint === exact) {
      return style;
    }
  } else if (down) {
    // handle down case
    if (
      GRID_BREAKPOINTS_KEYS_LIST_DESC.indexOf(breakpoint) >=
      GRID_BREAKPOINTS_KEYS_LIST_DESC.indexOf(down)
    ) {
      return style;
    }
  } else if (up) {
    // handle up case
    if (
      GRID_BREAKPOINTS_KEYS_LIST_DESC.indexOf(breakpoint) <=
      GRID_BREAKPOINTS_KEYS_LIST_DESC.indexOf(down)
    ) {
      return style;
    }
  }
  // no match found
  return null;
};
