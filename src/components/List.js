import React from "react";

import { StyleSheet, View } from "react-native";
import Row from "./Row";

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    flex: 1
  },
  bar: {
    backgroundColor: "#fff",
    borderRadius: 4,
    height: 8,
    top: 16,
    width: 40
  }
});

export default () => (
  <View style={styles.container}>
    <Row />
    <Row />
    <Row />
  </View>
);
