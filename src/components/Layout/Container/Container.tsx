import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import { getGridBreakpoint } from '../../../utils/responsive';

export declare interface ContainerProps extends ViewProps {
  Element?: React.ElementType;
  /** Fluid Container */
  fluid?: boolean;
  noPadding?: boolean;
};

const styles = StyleSheet.create({
  container: {},
});

const CONTAINER_PADDING_HORIZONTAL_MAP = {
  xs: 18,
  sm: 20,
  md: 40,
  lg: 48,
  xl: 48,
};

/** Container */
const Container = ({ style, Element = View, noPadding, ...rest }: ContainerProps) => {
  const gridBreakpoint = getGridBreakpoint();
  return (
    <Element
      style={[
        styles.container,
        noPadding ? null : { paddingHorizontal: CONTAINER_PADDING_HORIZONTAL_MAP[gridBreakpoint] },
      ]}
      {...rest}
    />
  );
}

export default Container;
