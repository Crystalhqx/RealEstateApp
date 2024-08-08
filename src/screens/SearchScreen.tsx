import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import PropertyCard from '../components/PropertyCard';
import {getRoomDetails} from '../apis/RoomDetailsApi';
import SearchBar from '../components/SearchBar';
import colors from '../assets/styles/colors';

const formatPrice = (price: number | string): string => {
  const priceNumber =
    typeof price === 'number'
      ? price
      : parseFloat(price.replace(/[^0-9.-]+/g, ''));
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(Math.round(priceNumber));
};

const formatSqft = (sqft: number): string => {
  return new Intl.NumberFormat('en-US').format(sqft);
};

const SearchScreen = () => {
  const [properties, setProperties] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await getRoomDetails();
        setProperties([data]);
      } catch (error) {
        console.error('Error fetching properties', error);
        setError('Failed to fetch properties. Please try again.');
      }
    };
    fetchProperties();
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar
        onSearch={function (query: string): void {
          throw new Error('Function not implemented.');
        }}
      />
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <ScrollView>
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              images={property.images}
              price={formatPrice(property.price)}
              bedrooms={property.beds}
              bathrooms={property.baths}
              sqft={formatSqft(property.square_feet)}
              address={property.address}
              zipcode={property.zipcode}
              description={property.description}
              keyDetails={[
                {key: 'List price', value: formatPrice(property.price)},
                {
                  key: 'Est. Mo. Payment',
                  value: formatPrice(property.price / 160),
                },
                {
                  key: 'Price/Sq.Ft.',
                  value: formatPrice(property.price / property.square_feet),
                },
                {key: 'Year built', value: property.year_build},
                {key: 'Lot size', value: formatSqft(property.sqft_lot_size)},
              ]}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  errorText: {
    color: colors.error,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default SearchScreen;
