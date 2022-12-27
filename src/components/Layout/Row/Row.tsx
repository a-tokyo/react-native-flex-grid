import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

export declare interface RowProps extends ViewProps {};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    // marginHorizontal: -1 * GRID_GUTTER;
  },
});

const Row = ({ style, ...rest }: RowProps) => (
  <View style={[styles.row, style]} {...rest} />
);

export default Row;
