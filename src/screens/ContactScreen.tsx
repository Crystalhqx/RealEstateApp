import React from 'react';
import ContactForm from '../components/ContactForm';
import {StyleSheet, View} from 'react-native';
import colors from '../assets/styles/colors';

const ContactScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ContactForm />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: colors.white,
  },
});
export default ContactScreen;
