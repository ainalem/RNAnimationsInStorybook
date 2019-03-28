import React, { PureComponent } from "react";

import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  row: {
    alignSelf: "stretch",
    borderBottomWidth: 1,
    borderBottomColor: "#C0C4D8",
    flexDirection: "row"
  },
  skeletonAvatar: {
    backgroundColor: "#C0C4D8",
    borderRadius: 10,
    height: 90,
    marginHorizontal: 20,
    marginVertical: 20,
    width: 90
  },
  hr: {
    alignSelf: "stretch",
    backgroundColor: "#C0C4D8",
    height: 1
  },
  title: {
    backgroundColor: "#C0C4D8",
    borderRadius: 3,
    marginBottom: 5,
    marginTop: 24,
    height: 16,
    width: 90
  },
  body: {
    backgroundColor: "#C0C4D8",
    borderRadius: 2,
    marginTop: 12,
    height: 8,
    width: 180
  }
});

export default () => (
  <View style={styles.row}>
    <View style={styles.skeletonAvatar} />
    <View style={styles.text}>
      <View style={styles.title} />
      <View style={styles.body} />
      <View style={styles.body} />
    </View>
  </View>
);
