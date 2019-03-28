import React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import SkeletonRow from './SkeletonRow';

const styles = StyleSheet.create({
  list: {
    alignSelf: 'stretch',
    flex: 1
  }
});

export default () => (
  <View style={styles.list}>
    <SkeletonRow />
    <SkeletonRow />
    <SkeletonRow />
  </View>
);
