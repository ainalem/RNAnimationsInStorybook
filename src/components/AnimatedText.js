import React from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback, Easing } from 'react-native';

type Props = {
  animatedValue: number;
};

export default () => {
  scale = new Animated.Value(0.5);
  toggle = 0;

  animate = () => {
    Animated.timing(scale, {
      toValue: toggle++ % 2 ? 0 : 1,
      duration: 500,
      easing: Easing.cubic,
      useNativeDriver: true,
    }).start();
  };

  const animatedValue = scale;
  const scaleValue = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const scaleValue2 = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, 1],
  });

  return (
    <TouchableWithoutFeedback onPress={() => this.animate()}>
      <View style={styles.container}>
        <Animated.View style={dynamicStyles.circle(scaleValue2)} />
        <Animated.View style={dynamicStyles.text(scaleValue)}>
          <Text style={{ fontSize: 18 }}>This and that</Text>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const dynamicStyles = {
  text: scale => ({
    transform: [{ scale }],
  }),
  circle: scale => ({
    backgroundColor: '#f2f2f2',
    borderRadius: 90,
    height: 180,
    position: 'absolute',
    shadowColor: '#333',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.30,
    shadowRadius: 30,
    transform: [{ scale }],
    width: 180,
  })
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
