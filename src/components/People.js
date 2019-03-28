import React from "react";
import { StyleSheet, View, Text } from "react-native";

import SkeletonList from "./SkeletonList";
import List from "./List";

export default ({ loaded }) => (
  <View style={styles.container}>
    <View style={dynamicStyles.top(loaded)}>
      <View style={styles.bar} />
    </View>
    <View style={styles.title}>
      <Text style={styles.titleText}>People</Text>
    </View>
    {!loaded && <SkeletonList />}
    {loaded && <List />}
  </View>
);

const dynamicStyles = {
  top: loaded => ({
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: loaded ? "#E84B3C" : "#C0C4D8",
    height: 70,
    justifyContent: "center",
    width: "100%"
  })
};

const styles = StyleSheet.create({
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
