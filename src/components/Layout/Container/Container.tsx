import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

export declare interface ContainerProps extends ViewProps {
  Element?: React.ElementType;
  /** Fluid Container */
  fluid?: boolean;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  }
});

/** Container */
const Container = ({ style, Element = View, ...rest }: ContainerProps) => (
  <Element style={styles.container} {...rest} />
);

export default Container;
