import React from 'react';
import { View } from 'react-native';

import { getConfig } from '../../../utils/grid';
import {
  getGridBreakpoint,
  GRID_BREAKPOINTS_KEYS_LIST_DESC,
} from '../../../utils/responsive';

/** Default gutter x size */
const DEFAULT_GX = 4;

export declare interface ColProps extends React.ComponentProps<typeof View> {
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
  /** Gutter size -- [Bootstrap Gutters](https://getbootstrap.com/docs/5.0/layout/gutters/) */
  gx?: 0 | 1 | 2 | 3 | 4 | 5;
  /** Direction */
  dir?: 'ltr' | 'rtl';
  /** Element to render - defaults to View */
  Element?: React.ElementType;
  /** style */
  style?: React.ComponentProps<typeof View>['style'];
}

/** converts decimal to percent string */
const _toPercent = (num: number): string => `${num * 100}%`;

/**
 * Gets column style
 */
export const getColStyle = (props): Object => {
  const { gx = DEFAULT_GX } = props;

  const gridBreakpoint = getGridBreakpoint();
  const config = getConfig();

  /** style object */
  let style: {
    width?: string | number;
    marginLeft?: string | number;
    marginRight?: string | number;
    flex?: string | number;
    order?: number;
    paddingHorizontal?: number;
  } = {
    paddingHorizontal: gx ? config.gutters[gx] / 2 : undefined,
  };

  // handle size
  for (
    let i = GRID_BREAKPOINTS_KEYS_LIST_DESC.indexOf(gridBreakpoint);
    i < GRID_BREAKPOINTS_KEYS_LIST_DESC.length;
    i += 1
  ) {
    const element = GRID_BREAKPOINTS_KEYS_LIST_DESC[i];
    if (props[element] === 'auto') {
      style = {
        ...style,
        flex: 1,
      };
      break;
    }
    if (
      typeof props[element] === 'number' ||
      typeof props[element] === 'string'
    ) {
      style = {
        ...style,
        width: _toPercent(Number(props[element]) / config.colCount),
      };
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
    let i = GRID_BREAKPOINTS_KEYS_LIST_DESC.indexOf(gridBreakpoint);
    i < GRID_BREAKPOINTS_KEYS_LIST_DESC.length;
    i += 1
  ) {
    const element = `${GRID_BREAKPOINTS_KEYS_LIST_DESC[i]}Offset`;
    if (
      typeof props[element] === 'number' ||
      typeof props[element] === 'string'
    ) {
      style = {
        ...style,
        [props.dir === 'rtl' ? 'marginRight' : 'marginLeft']: _toPercent(
          Number(props[element]) / config.colCount,
        ),
      };
      break;
    }
  }

  // handle order
  for (
    let i = GRID_BREAKPOINTS_KEYS_LIST_DESC.indexOf(gridBreakpoint);
    i < GRID_BREAKPOINTS_KEYS_LIST_DESC.length;
    i += 1
  ) {
    const element = `${GRID_BREAKPOINTS_KEYS_LIST_DESC[i]}Order`;
    if (
      typeof props[element] === 'number' ||
      typeof props[element] === 'string'
    ) {
      style = {
        ...style,
        order: Number(props[element]),
      };
      break;
    }
  }

  return style;
};

/** Column [Bootstrap Docs](https://getbootstrap.com/docs/5.0/layout/columns) */
const Col = (props: ColProps) => {
  const { style, Element = View, ...rest } = props;
  return <Element style={[getColStyle(props), style]} {...rest} />;
};

export default Col;
