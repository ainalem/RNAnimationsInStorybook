import React from "react";
import { StyleSheet, View, Text } from "react-native";

import List from "./List";

export default () => (
  <View style={styles.container}>
    <View style={styles.top}>
      <View style={styles.bar} />
    </View>
    <View style={styles.title}>
      <Text style={styles.titleText}>People</Text>
    </View>
    <List />
  </View>
);

const styles = StyleSheet.create({
  top: {
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#C0C4D8",
    height: 70,
    justifyContent: "center",
    width: "100%"
  },
  container: {
    alignSelf: "stretch",
    flex: 1
  },
  title: {
    marginVertical: 20,
    marginLeft: 20
  },
  titleText: {
    color: "#323335",
    fontSize: 32,
    fontWeight: "700"
  }
});
