import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import colors from '../assets/styles/colors';

const ContactForm: React.FC = () => {
  return (
    <View style={styles.contactContainer}>
      <Text style={styles.attributeTitle}>Name</Text>
      <TextInput placeholder="Full Name" style={styles.input} />
      <Text style={styles.attributeTitle}>Email</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <Text style={styles.attributeTitle}>Phone</Text>
      <TextInput placeholder="Phone" style={styles.input} />
      <Text style={styles.attributeTitle}>Message</Text>
      <TextInput
        placeholder="I am interested in "
        style={[styles.input, {height: 80}]}
        multiline
      />
      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendButtonText}>Send message</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    backgroundColor: colors.white,
  },
  attributeTitle: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 15,
  },
  sendButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ContactForm;
