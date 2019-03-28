import React from "react";
import { StyleSheet, View, Text } from "react-native";

import SkeletonList from "./SkeletonList";
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
  container: {
    alignSelf: "stretch",
    flex: 1
  },
  top: {
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#E84B3C",
    height: 70,
    justifyContent: "flex-end",
    width: "100%"
  },
  bar: {
    backgroundColor: "#f5f5f5",
    borderRadius: 3,
    marginBottom: 10,
    height: 6,
    width: 50
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
