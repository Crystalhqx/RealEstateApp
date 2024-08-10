import React, {useRef, useMemo, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {RouteProp, useRoute, useNavigation} from '@react-navigation/native';
import BottomSheet from '@gorhom/bottom-sheet';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RootStackParamList} from '../navigators/MainStackNavigator';
import ContactForm from '../components/ContactForm';
import RequestSection from '../components/RequestSection';
import colors from '../assets/styles/colors';
import SchoolSection from '../components/SchoolSection';

type PropertyDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'PropertyDetails'
>;

type PropertyDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PropertyDetails'
>;

const PropertyDetailsScreen: React.FC = () => {
  const route = useRoute<PropertyDetailsScreenRouteProp>();
  const navigation = useNavigation<PropertyDetailsScreenNavigationProp>();
  const {
    images,
    price,
    bedrooms,
    bathrooms,
    sqft,
    address,
    zipcode,
    description,
    keyDetails,
  } = route.params;

  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['30%', '30%', '85%'], []);

  const [showMoreDescription, setShowMoreDescription] = useState(false);
  const [showMoreKeyDetails, setShowMoreKeyDetails] = useState(false);

  const priceInsights = keyDetails.filter(
    detail =>
      detail.key === 'List price' ||
      detail.key === 'Est. Mo. Payment' ||
      detail.key === 'Price/Sq.Ft.',
  );

  const homeFacts = keyDetails.filter(
    detail =>
      detail.key === 'Year built' ||
      detail.key === 'Lot size' ||
      detail.key === 'Property type',
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeIcon}
        onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="close" size={20} />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.imagesScrollViewContent}>
        {images.map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate('Images', {images: images, index: index})
            }>
            <Image source={{uri: image}} style={styles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <BottomSheet
        ref={sheetRef}
        index={1}
        snapPoints={snapPoints}
        enablePanDownToClose={false}>
        <ScrollView style={styles.sheetContent}>
          {/* Basic info */}
          <Text style={styles.price}>{price}</Text>
          <View style={styles.iconTextContainer}>
            <MaterialIcons name="bed" size={20} color="grey" />
            <Text style={styles.boldText}>{bedrooms}</Text>
            <Text style={styles.regularText}>
              {bedrooms > 1 ? 'Beds' : 'Bed'}
            </Text>
            <MaterialCommunityIcons name="shower" size={20} color="grey" />
            <Text style={styles.boldText}>{bathrooms}</Text>
            <Text style={styles.regularText}>
              {bathrooms > 1 ? 'Baths' : 'Bath'}
            </Text>
            <MaterialCommunityIcons name="set-square" size={20} color="grey" />
            <Text style={styles.boldText}>{sqft}</Text>
            <Text style={styles.regularText}>Sq.Ft.</Text>
          </View>
          <Text style={styles.address}>
            {address} {zipcode}
          </Text>
          <View style={styles.paymentContainer}>
            <Text style={styles.paymentText}>Est. </Text>
            <Text style={styles.paymentText}>
              {
                keyDetails.find(detail => detail.key === 'Est. Mo. Payment')
                  ?.value
              }
              /month
            </Text>
          </View>

          {/* About this home */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About this home</Text>
            <Text
              style={styles.sectionText}
              numberOfLines={showMoreDescription ? undefined : 5}>
              {description}
            </Text>
            <TouchableOpacity
              onPress={() => setShowMoreDescription(!showMoreDescription)}>
              <Text style={styles.showMoreText}>
                {showMoreDescription ? 'Show less' : 'Show more'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Key Details */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Key Details</Text>
            <Text style={styles.secondaryTitle}>Price insights</Text>
            <View style={styles.keyDetailsContainer}>
              {priceInsights.map((detail, index) => (
                <View key={index} style={styles.detailContainer}>
                  <Text style={styles.detailKey}>{detail.key}</Text>
                  <Text style={styles.detailValue}>{detail.value}</Text>
                </View>
              ))}
            </View>
            <Text style={styles.secondaryTitle}>Home facts</Text>
            <View style={styles.keyDetailsContainer}>
              {(showMoreKeyDetails ? homeFacts : homeFacts.slice(0, 1)).map(
                (detail, index) => (
                  <View key={index} style={styles.detailContainer}>
                    <Text style={styles.detailKey}>{detail.key}</Text>
                    <Text style={styles.detailValue}>{detail.value}</Text>
                  </View>
                ),
              )}
            </View>
            {
              <TouchableOpacity
                onPress={() => setShowMoreKeyDetails(!showMoreKeyDetails)}>
                <Text style={styles.showMoreText}>
                  {showMoreKeyDetails ? 'Show less' : 'Show more'}
                </Text>
              </TouchableOpacity>
            }
          </View>

          {/* Request a tour */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Thinking of buying?</Text>
            <RequestSection />
          </View>

          {/* Schools */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Schools</Text>
            <SchoolSection />
          </View>

          {/* Contact */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contact agent</Text>
            <ContactForm />
          </View>
          <View style={styles.bottomPadding} />
        </ScrollView>
      </BottomSheet>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => navigation.navigate('Contact')}>
          <Text style={styles.contactButtonText}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.requestButton}
          onPress={() => navigation.navigate('Request')}>
          <Text style={styles.requestButtonText}>Request a tour</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imagesScrollViewContent: {
    paddingBottom: 200,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 2,
  },
  sheetContent: {
    paddingHorizontal: 18,
    paddingVertical: 30,
    flex: 1,
    paddingBottom: 100,
  },
  price: {
    fontSize: 32,
    fontWeight: '900',
    color: colors.black,
    marginBottom: 15,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.black,
    marginHorizontal: 5,
  },
  regularText: {
    fontSize: 16,
    color: colors.black,
    marginRight: 10,
  },
  address: {
    fontSize: 16,
    color: colors.darkGray,
    marginBottom: 15,
  },
  paymentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: colors.third,
    borderRadius: 6,
    padding: 10,
  },
  paymentText: {
    fontWeight: 'bold',
    color: colors.black,
  },

  section: {
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: colors.darkGray,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 4,
    backgroundColor: colors.white,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 10,
  },
  secondaryTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.black,
    paddingVertical: 5,
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
  },
  showMoreText: {
    fontSize: 16,
    color: colors.secondary,
    fontWeight: 'bold',
  },
  keyDetailsContainer: {
    paddingRight: 20,
    flexWrap: 'wrap',
    paddingVertical: 10,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  detailKey: {
    fontSize: 16,
    color: colors.black,
  },
  detailValue: {
    fontSize: 16,
    color: colors.black,
  },
  bottomPadding: {
    height: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 22,
    borderTopWidth: 1,
    borderColor: colors.gray,
    padding: 20,
    backgroundColor: colors.white,
  },
  contactButton: {
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 5,
    borderWidth: 0.7,
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  requestButton: {
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 5,
    borderWidth: 0.7,
    borderColor: colors.primary,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  contactButtonText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  requestButtonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  closeIcon: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
    backgroundColor: colors.lightestGray,
    borderRadius: 20,
    padding: 10,
  },
});

export default PropertyDetailsScreen;
