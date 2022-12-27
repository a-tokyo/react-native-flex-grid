import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import { getGridBreakpoint, getContainerPaddingHorizontalMap } from '../../../utils/responsive';

export declare interface ContainerProps extends ViewProps {
  Element?: React.ElementType;
  /** Fluid Container */
  fluid?: boolean;
  noPadding?: boolean;
};

const styles = StyleSheet.create({
  container: {},
});

/** Container */
const Container = ({ style, Element = View, noPadding, ...rest }: ContainerProps) => (
  <Element
    style={[
      styles.container,
      noPadding ? null : { paddingHorizontal: getContainerPaddingHorizontalMap()[getGridBreakpoint()] },
    ]}
    {...rest}
  />
);

export default Container;
