import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import { getConfig } from '../../../utils/grid';

export declare interface RowProps extends ViewProps {
  /** Gutter size -- [Bootstrap Gutters](https://getbootstrap.com/docs/5.0/layout/gutters/) */
  gx?: 0 | 1 | 2 | 3 | 4 | 5;
  /** Direction */
  dir?: 'ltr' | 'rtl';
  /** Element to render - defaults to View */
  Element?: React.ElementType;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rtl: {
    flexDirection: 'row-reverse',
  },
});

/** Row */
const Row = ({
  style,
  gx = 4,
  dir = 'ltr',
  Element = View,
  ...rest
}: RowProps) => (
  <Element
    style={[
      styles.row,
      dir === 'rtl' && styles.rtl,
      gx && {
        marginHorizontal: (-1 * getConfig().gutters[gx]) / 2,
      },
      style,
    ]}
    {...rest}
  />
);

export default Row;
