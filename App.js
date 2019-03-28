import React from "react";
import { StyleSheet, View } from "react-native";

import People from "./src/components/People";

export default () => (
  <View style={styles.container}>
    <People />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
