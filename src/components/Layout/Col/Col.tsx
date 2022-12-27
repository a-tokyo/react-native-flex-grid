import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import { GUTTERS, GRID_BREAKPOINTS_KEYS_LIST, getGridBreakpoint, getGridColCount } from '../../../utils/responsive';

export declare interface ColProps extends ViewProps {
  /** xs size */
  xs?: number | string;
  /** sm size */
  sm?: number | string;
  /** md size */
  md?: number | string;
  /** lg size */
  lg?: number | string;
  /** xl size */
  xl?: number | string;
  /** xs offset */
  xsOffset?: number | string;
  /** sm offset */
  smOffset?: number | string;
  /** md offset */
  mdOffset?: number | string;
  /** lg offset */
  lgOffset?: number | string;
  /** xl offset */
  xlOffset?: number | string;
  /** Element to render */
  Element?: React.ElementType;
  /** Gutter */
  gx?: 0 | 1 | 2 | 3 | 4 | 5;
};

const styles = StyleSheet.create({
  col: {
    paddingHorizontal: GUTTERS[4] / 2,
  }
});

/** converts decimal to percent string */
const _toPercent = (num: number): string => `${num * 100}%`;

/** 
 * Gets column style
 */
export const getColStyle = (props): Object => {
  const gridBreakpoint = getGridBreakpoint();

  /** style object */
  let style: {
    width?: string | number;
    marginLeft?: string | number;
    flex?: string | number;
  } = {};

  // handle size
  for (
    let i = GRID_BREAKPOINTS_KEYS_LIST.indexOf(gridBreakpoint);
    i < GRID_BREAKPOINTS_KEYS_LIST.length;
    i += 1
  ) {
    const element = GRID_BREAKPOINTS_KEYS_LIST[i];
    if (props[element] === 'auto') {
      style = {
        ...style,
        flex: 1,
      }
      break;
    }
    if (
      typeof props[element] === 'number' ||
      typeof props[element] === 'string'
    ) {
      style = {
        ...style,
        width: _toPercent(Number(props[element]) / getGridColCount()),
      }
      break;
    }
  }

  if (style.width === undefined) {
    style = {
      ...style,
      flex: 1,
    };
  }

  // handle offset
  for (
    let i = GRID_BREAKPOINTS_KEYS_LIST.indexOf(gridBreakpoint);
    i < GRID_BREAKPOINTS_KEYS_LIST.length;
    i += 1
  ) {
    const element = `${GRID_BREAKPOINTS_KEYS_LIST[i]}Offset`;
    if (
      typeof props[element] === 'number' ||
      typeof props[element] === 'string'
    ) {
      style = {
        ...style,
        marginLeft: _toPercent(Number(props[element]) / getGridColCount()),
      }
      break;
    }
  }

  // @todo handle order

  return style;
};

/** Column */
const Col = (props: ColProps) => {
  const { style, Element = View, gx = 4, ...rest } = props;
  return (<Element style={[styles.col, gx ? {
    paddingHorizontal: GUTTERS[gx] / 2,
  } : undefined, getColStyle(props), style]} {...rest} />);
}

export default Col;
