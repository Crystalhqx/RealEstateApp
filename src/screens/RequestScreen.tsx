import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigators/MainStackNavigator';
import colors from '../assets/styles/colors';
import ContactForm from '../components/ContactForm';
import RequestSection from '../components/RequestSection';

type RequestScreenRouteProp = RouteProp<RootStackParamList, 'Request'>;
type RequestScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Request'
>;

interface RequestScreenProps {
  navigation: RequestScreenNavigationProp;
}
const Divider = () => <View style={styles.divider} />;
const RequestScreen: React.FC<RequestScreenProps> = ({navigation}) => {
  const route = useRoute<RequestScreenRouteProp>();

  const {selectedDate, selectedTime} = route.params || {};
  const hasSelectedDateAndTime = selectedDate && selectedTime;

  const [showContactForm, setShowContactForm] = useState<boolean>();

  useEffect(() => {
    if (hasSelectedDateAndTime) {
      setShowContactForm(true);
    }
  }, [hasSelectedDateAndTime]);

  return (
    <ScrollView style={styles.container}>
      {!showContactForm ? (
        <>
          <RequestSection />
        </>
      ) : (
        <>
          <Text style={styles.label}>Your preferred time</Text>
          <Text
            style={
              styles.selectedTime
            }>{`${selectedDate} at ${selectedTime}`}</Text>
          <Divider />
          <Text style={styles.label}>How can we contact you?</Text>
          <ContactForm />
          <View style={styles.bottomPadding}></View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: colors.white,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  selectedTime: {
    fontSize: 18,
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: colors.gray,
    marginVertical: 20,
  },
  bottomPadding: {
    height: 50,
  },
});

export default RequestScreen;
