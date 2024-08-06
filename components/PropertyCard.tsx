import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  Search: undefined;
  PropertyDetails: {
    image: string;
    address: string;
    price: string;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    description: string;
    keyDetails: string[];
  };
};

type PropertyCardNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PropertyDetails'
>;

interface PropertyCardProps {
  image: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  address: string;
  description: string;
  keyDetails: string[];
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  price,
  bedrooms,
  bathrooms,
  sqft,
  address,
  description,
  keyDetails,
}) => {
  const navigation = useNavigation<PropertyCardNavigationProp>();

  const handlePress = () => {
    navigation.navigate('PropertyDetails', {
      image,
      price,
      bedrooms,
      bathrooms,
      sqft,
      address,
      description,
      keyDetails,
    });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.card}>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.description}>
            {bedrooms} {bedrooms > 1 ? 'Beds' : 'Bed'}
            {'  ·  '}
            {bathrooms} {bathrooms > 1 ? 'Baths' : 'Bath'}
            {'  ·  '}
            {sqft} {'Sq.Ft.'}
          </Text>
          <Text style={styles.address}>{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 13,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    padding: 15,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 3,
  },
  description: {
    fontSize: 16,
    color: 'black',
    marginVertical: 3,
  },
  address: {
    fontSize: 14,
    marginVertical: 3,
  },
});

export default PropertyCard;
