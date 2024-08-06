import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import RequestSection from '../components/RequestSection';

const RequestScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={{uri: 'https://via.placeholder.com/150'}}
          style={styles.image}
        />
        <Text style={styles.title}>Take a tour with a buyer’s agent</Text>
        <Text style={styles.address}>
          1352 W 600 S, Salt Lake City, UT, 84104
        </Text>

        <RequestSection />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  address: {
    fontSize: 16,
    color: '#666',
    marginHorizontal: 20,
    marginBottom: 20,
  },
});

export default RequestScreen;
