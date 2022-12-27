import React from 'react';
import { View, ViewProps } from 'react-native';

import { getConfig, GRID_BREAKPOINTS_KEYS_LIST, getGridBreakpoint, getGridColCount } from '../../../utils/grid';

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
  /** xs order */
  xsOrder?: number | string;
  /** sm order */
  smOrder?: number | string;
  /** md order */
  mdOrder?: number | string;
  /** lg order */
  lgOrder?: number | string;
  /** xl order */
  xlOrder?: number | string;
  /** Element to render */
  Element?: React.ElementType;
  /** Gutter size -- [Bootstrap Gutters](https://getbootstrap.com/docs/5.0/layout/gutters/) */
  gx?: 0 | 1 | 2 | 3 | 4 | 5;
};

/** converts decimal to percent string */
const _toPercent = (num: number): string => `${num * 100}%`;

/** 
 * Gets column style
 */
const _getColStyle = (props): Object => {
  const gridBreakpoint = getGridBreakpoint();

  /** style object */
  let style: {
    width?: string | number;
    marginLeft?: string | number;
    flex?: string | number;
    order?: number;
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
        width: _toPercent(Number(props[element]) / getConfig().colCount),
      }
      break;
    }
  }

  // if no width was assigned -> handle as `auto`
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

  // handle order
  for (
    let i = GRID_BREAKPOINTS_KEYS_LIST.indexOf(gridBreakpoint);
    i < GRID_BREAKPOINTS_KEYS_LIST.length;
    i += 1
  ) {
    const element = `${GRID_BREAKPOINTS_KEYS_LIST[i]}Order`;
    if (
      typeof props[element] === 'number' ||
      typeof props[element] === 'string'
    ) {
      style = {
        ...style,
        order: Number(props[element]),
      }
      break;
    }
  }

  return style;
};

/** Column */
const Col = (props: ColProps) => {
  const { style, Element = View, gx = 4, ...rest } = props;
  return (<Element style={[gx ? {
    paddingHorizontal: getConfig().gutters[gx] / 2,
  } : undefined, _getColStyle(props), style]} {...rest} />);
}

export default Col;
