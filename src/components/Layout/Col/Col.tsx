import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { getColWidth } from '../../../utils/responsive';

export declare interface ColProps extends ViewProps { };

const styles = StyleSheet.create({
  col: {
    // flex: 1,
  }
});

const Col = (props: ColProps) => {
  const { style, ...rest } = props;
  return (<View style={[styles.col, { width: getColWidth(props) }, style]} {...rest} />);
}

export default Col;
