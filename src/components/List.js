import React, { PureComponent } from "react";

import { StyleSheet, View, Text } from "react-native";
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
    <Row
      avatar={require("../../images/person1.jpg")}
      title="Eduardo"
      subtitle=""
      body=""
    />
    <Row
      avatar={require("../../images/person2.jpg")}
      title="Mila"
      subtitle=""
      body=""
    />
    <Row
      avatar={require("../../images/person3.jpg")}
      title="Eva"
      subtitle=""
      body=""
    />
  </View>
);
