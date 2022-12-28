import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";

import StorybookUIRoot from "./.storybook-ondevice/Storybook";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default () => (
  <View
    style={styles.container}
  >
    <StorybookUIRoot />
  </View>
);
