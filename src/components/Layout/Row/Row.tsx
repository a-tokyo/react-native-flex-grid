import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import { getConfig } from '../../../utils/responsive';

export declare interface RowProps extends ViewProps {
  /** Gutter size -- [Bootstrap Gutters](https://getbootstrap.com/docs/5.0/layout/gutters/) */
  gx?: 0 | 1 | 2 | 3 | 4 | 5;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
});

/** Row */
const Row = ({ style, gx = 4, ...rest }: RowProps) => (
  <View style={[styles.row, gx ? {
    marginHorizontal: -1 * getConfig().gutters[gx] / 2,
  } : undefined, style]} {...rest} />
);

export default Row;
