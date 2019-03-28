import React, { PureComponent } from "react";

import { StyleSheet, View, Image, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    borderBottomWidth: 1,
    borderBottomColor: "#C0C4D8",
    flexDirection: "row"
  },
  avatar: {
    backgroundColor: "#C0C4D8",
    borderRadius: 10,
    height: 90,
    marginHorizontal: 20,
    marginVertical: 20,
    width: 90
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
    borderRadius: 3,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 24,
    height: 16,
    width: 90
  },
  titleText: {
    fontWeight: "bold"
  },
  body: {
    backgroundColor: "#C0C4D8",
    borderRadius: 2,
    marginTop: 12,
    height: 8,
    width: 180
  }
});

export default props => {
  console.log(avatar);
  const { avatar, title, subtitle, body } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={avatar} />
      <View style={styles.text}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.body}>
          <Text>{subtitle}</Text>
        </View>
        <View style={styles.body}>
          <Text>{body}</Text>
        </View>
      </View>
    </View>
  );
};
