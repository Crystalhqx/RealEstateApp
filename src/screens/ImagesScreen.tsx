import React from 'react';
import {StyleSheet, View} from 'react-native';
import ImagesSection from '../components/ImagesSection';
import colors from '../assets/styles/colors';

const ImagesScreen: React.FC<{
  route: {params: {images: string[]; index: number}};
}> = ({route}) => {
  const {images, index} = route.params;

  return (
    <View style={styles.container}>
      <ImagesSection images={images} index={index} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: colors.white,
  },
});

export default ImagesScreen;
