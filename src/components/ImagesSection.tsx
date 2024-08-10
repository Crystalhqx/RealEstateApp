import * as React from 'react';
import {
  Dimensions,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';

const width = Dimensions.get('window').width;

function ImagesSection({images, index}: {images: string[]; index: number}) {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(index);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={ref}
        width={width}
        height={width / 2}
        data={images}
        defaultIndex={index}
        onProgressChange={(_, absoluteProgress) => {
          progress.value = absoluteProgress;
        }}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={styles.image} />
        )}
      />

      <ScrollView horizontal>
        {images.map((_, i) => (
          <TouchableOpacity key={i} onPress={() => onPressPagination(i)} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '50%',
  },
  image: {
    flex: 1,
    borderWidth: 1,
    borderBlockColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
  },
});

export default ImagesSection;
