import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import { getGridBreakpoint, getContainerPaddingHorizontalMap, getContainerMaxWidthsMap } from '../../../utils/responsive';

export declare interface ContainerProps extends ViewProps {
  /** Fluid Container */
  fluid?: boolean;
  /** No Padding */
  noPadding?: boolean;
  /** Element to render */
  Element?: React.ElementType;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  fluid: {
    maxWidth: '100%',
  }
});

/** Container */
const Container = ({ style, fluid, Element = View, noPadding, ...rest }: ContainerProps) => {
  const gridBreakpoint = getGridBreakpoint()
  return (
    <Element
      style={[
        styles.container,
        noPadding ? null : { paddingHorizontal: getContainerPaddingHorizontalMap()[gridBreakpoint] },
        fluid ? styles.fluid : {
          ...styles.container,
          maxWidth: getContainerMaxWidthsMap[gridBreakpoint],
        },
      ]}
      {...rest}
    />
  );
}

export default Container;
