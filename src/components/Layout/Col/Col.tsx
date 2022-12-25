import React from 'react';
import { StyleSheet, View } from 'react-native';

export declare interface ColProps {};

const styles = StyleSheet.create({
  col: {
    flex: 1,
  }
});

const Col = () => (
  <View style={styles.col}>
  </View>
);

export default Col;