import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import colors from '../assets/styles/colors';

type RootStackParamList = {
  Search: undefined;
  PropertyDetails: {
    images: string[];
    price: string;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    address: string;
    zipcode: number;
    description: string;
    keyDetails: {key: string; value: string}[];
  };
};

type PropertyCardNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PropertyDetails'
>;

interface PropertyCardProps {
  images: string[];
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  address: string;
  zipcode: number;
  description: string;
  keyDetails: {key: string; value: string}[];
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  images,
  price,
  bedrooms,
  bathrooms,
  sqft,
  address,
  zipcode,
  description,
  keyDetails,
}) => {
  const navigation = useNavigation<PropertyCardNavigationProp>();

  const handlePress = () => {
    navigation.navigate('PropertyDetails', {
      images,
      price,
      bedrooms,
      bathrooms,
      sqft,
      address,
      zipcode,
      description,
      keyDetails,
    });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.touchable}>
      <View style={styles.card}>
        <Image source={{uri: images[0]}} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.info}>
            {bedrooms} {bedrooms > 1 ? 'Beds' : 'Bed'}
            {'  ·  '}
            {bathrooms} {bathrooms > 1 ? 'Baths' : 'Bath'}
            {'  ·  '}
            {sqft} {'Sq.Ft.'}
          </Text>
          <Text style={styles.address}>
            {address}, {zipcode}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    borderColor: colors.gray,
    borderWidth: 1,
  },
  image: {
    height: 200,
  },
  details: {
    padding: 15,
  },
  price: {
    fontSize: 22,
    fontWeight: '900',
    marginVertical: 3,
  },
  info: {
    fontSize: 16,
    color: colors.black,
    marginVertical: 3,
  },
  address: {
    fontSize: 14,
    color: colors.darkGray,
    marginVertical: 3,
  },
});

export default PropertyCard;
