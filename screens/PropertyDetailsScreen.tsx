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
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RootStackParamList} from '../navigation/MainStackNavigator';
import ContactForm from '../components/ContactForm';
import CommuteSection from '../components/CommuteSection';
import RequestSection from '../components/RequestSection';
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
    image,
    address,
    price,
    bedrooms,
    bathrooms,
    sqft,
    description,
    keyDetails,
  } = route.params;

  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['30%', '30%', '85%'], []);

  const [showMoreDescription, setShowMoreDescription] = useState(false);
  const [showMoreKeyDetails, setShowMoreKeyDetails] = useState(false);

  const Divider = () => {
    return <View style={styles.divider} />;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeIcon}
        onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="close" size={24} />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.imagesScrollViewContent}>
        <Image source={{uri: image}} style={styles.image} />
        <Image source={{uri: image}} style={styles.image} />
        <Image source={{uri: image}} style={styles.image} />
        <Image source={{uri: image}} style={styles.image} />
      </ScrollView>
      <BottomSheet
        ref={sheetRef}
        index={1}
        snapPoints={snapPoints}
        enablePanDownToClose={false}>
        <BottomSheetScrollView contentContainerStyle={styles.sheetContent}>
          <ScrollView>
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

              <MaterialCommunityIcons
                name="set-square"
                size={20}
                color="grey"
              />
              <Text style={styles.boldText}>{sqft}</Text>
              <Text style={styles.regularText}>Sq.Ft.</Text>
            </View>
            <Text style={styles.address}>{address}</Text>

            <Divider />
            <CommuteSection />
            <Divider />

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>About this home</Text>
              <Text
                style={styles.sectionText}
                numberOfLines={showMoreDescription ? undefined : 3}>
                {description}
              </Text>
              <TouchableOpacity
                onPress={() => setShowMoreDescription(!showMoreDescription)}>
                <Text style={styles.showMoreText}>
                  {showMoreDescription ? 'Show less' : 'Show more'}
                </Text>
              </TouchableOpacity>
            </View>

            <Divider />

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Key Details</Text>
              <View style={styles.keyDetailsContainer}>
                {keyDetails.map((detail, index) => (
                  <View key={index} style={styles.detailContainer}>
                    <Text style={styles.detailKey}>{detail.key}</Text>
                    <Text style={styles.detailValue}>{detail.value}</Text>
                  </View>
                ))}
              </View>
              <TouchableOpacity
                onPress={() => setShowMoreKeyDetails(!showMoreKeyDetails)}>
                <Text style={styles.showMoreText}>
                  {showMoreKeyDetails ? 'Show less' : 'Show more'}
                </Text>
              </TouchableOpacity>
            </View>

            <Divider />
            <Text style={styles.sectionTitle}>Thinking of buying?</Text>
            <RequestSection />

            <Divider />

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Contact agent</Text>
              <ContactForm />
            </View>
            <View style={styles.bottomPadding} />
          </ScrollView>
        </BottomSheetScrollView>
      </BottomSheet>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => navigation.navigate('ContactScreen')}>
          <Text style={styles.contactButtonText}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.requestButton} onPress={() => {}}>
          <Text style={styles.requestButtonText}>Request a tour</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  imagesScrollViewContent: {
    paddingBottom: 200,
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 2,
  },
  sheetContent: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    flex: 1,
    paddingBottom: 100,
  },
  price: {
    fontSize: 32,
    fontWeight: '900',
    color: '#333',
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
    color: '#333',
    marginHorizontal: 5,
  },
  regularText: {
    fontSize: 16,
    color: '#333',
    marginRight: 18,
  },
  address: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
  },
  showMoreText: {
    fontSize: 16,
    color: '#0A6847',
    fontWeight: 'bold',
  },
  bottomPadding: {
    height: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: '#ccc',
    padding: 12,
  },
  contactButton: {
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 5,
    borderWidth: 0.7,
    borderColor: 'black',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  requestButton: {
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 5,
    borderWidth: 0.7,
    borderColor: 'black',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  contactButtonText: {
    color: 'black',
  },
  requestButtonText: {
    color: 'white',
  },
  divider: {
    height: 0.7,
    backgroundColor: '#E0E0E0',
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  closeIcon: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
    backgroundColor: 'rgba(225,225,225,0.5)',
    borderRadius: 20,
    padding: 10,
  },
  keyDetailsContainer: {
    paddingRight: 20,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  detailContainer: {
    // width: '48%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  detailKey: {
    fontSize: 16,
    fontWeight: 'light',
    color: '#333',
  },
  detailValue: {
    fontSize: 16,
    color: '#333',
  },
});

export default PropertyDetailsScreen;
