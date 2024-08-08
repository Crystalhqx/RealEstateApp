import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
const FeedScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView></ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default FeedScreen;
