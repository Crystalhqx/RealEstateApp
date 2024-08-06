import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import PropertyCard from '../components/PropertyCard';

const properties = [
  {
    image: 'https://via.placeholder.com/150',
    address: '1218 W 900 S, Salt Lake City, UT',
    price: '$350,000',
    bedrooms: 2,
    bathrooms: 1,
    sqft: 860,
    description:
      'Calling all investors!! This property has great proximity to downtown and is priced to sell. Needs some TLC but has great potential!',
    keyDetails: [
      {key: 'List price', value: '$353,300'},
      {key: 'Est. Mo. Payment', value: '$1,218'},
      {key: 'Price/Sq. Ft.', value: '$407'},
      {key: 'Year built', value: '1927'},
      {key: 'Lot size', value: '7,841 sqft'},
    ],
  },
  {
    image: 'https://via.placeholder.com/150',
    address: '1251 W 700 S, Salt Lake City, UT',
    price: '$335,000',
    bedrooms: 2,
    bathrooms: 1,
    sqft: 606,
    description:
      'Charming home in the heart of the city, close to all amenities. Perfect for a small family or a couple.',
    keyDetails: [
      {key: 'List price', value: '$335,000'},
      {key: 'Est. Mo. Payment', value: '$1,400'},
      {key: 'Price/Sq. Ft.', value: '$600'},
      {key: 'Year built', value: '1937'},
      {key: 'Lot size', value: '7,000 sqft'},
    ],
  },
];

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {properties.map((property, index) => (
          <PropertyCard
            key={index}
            image={property.image}
            price={property.price}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            sqft={property.sqft}
            address={property.address}
            description={property.description}
            keyDetails={property.keyDetails}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});

export default SearchScreen;
