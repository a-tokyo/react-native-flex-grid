import React from 'react';
import { StyleSheet, View } from 'react-native';

export declare interface RowProps {};

const styles = StyleSheet.create({
  row: {
    flex: 1,
  }
});

const Row = () => (
  <View style={styles.row}>
  </View>
);

export default Row;