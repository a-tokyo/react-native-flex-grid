import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Dimensions } from 'react-native';


import { getConfig } from '../../../utils/grid';
import { getGridBreakpoint } from '../../../utils/responsive';

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
    justifySelf: 'center',
  },
  fluid: {
    maxWidth: '100%',
  }
});

/** Container */
const Container = ({ style, fluid, Element = View, noPadding, ...rest }: ContainerProps) => {
  /** Grid config */
  const gridConfig = getConfig();
  /** current grid breakpoint */
  const gridBreakpoint = getGridBreakpoint();
  /** container maxWidth */
  const maxWidth = gridConfig.containerMaxWidths[gridBreakpoint];
  /** screen width */
  const SCREEN_WIDTH = Dimensions.get('window').width;

  return (
    <Element
      style={[
        styles.container,
        noPadding ? null : { paddingHorizontal: gridConfig.containerPaddingsHorizontal[gridBreakpoint] },
        fluid ? styles.fluid : {
          maxWidth,
          marginHorizontal: typeof maxWidth === 'number' ? (SCREEN_WIDTH - maxWidth) / 2 : undefined,
        },
      ]}
      {...rest}
    />
  );
}

export default Container;
