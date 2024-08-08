import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/styles/colors';

// Mock data for schools
const schoolsData = [
  {
    name: 'Benjamin Bubb Elementary School',
    rating: 8,
    level: 'Public, K-5',
    students: 385,
    distance: '0.4 mi',
    reviews: 16,
  },
  {
    name: 'Isaac Newton Graham Middle School',
    rating: 6,
    level: 'Public, 6-8',
    students: 858,
    distance: '0.1 mi',
    reviews: 37,
  },
  {
    name: 'Mountain View High School',
    rating: 8,
    level: 'Public, 9-12',
    students: 2257,
    distance: '1.9 mi',
    reviews: 10,
  },
];

const SchoolSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        This home is within{' '}
        <Text style={styles.boldText}>
          Mountain View Whisman School District
        </Text>{' '}
        and{' '}
        <Text style={styles.boldText}>
          Mountain View-Los Altos Union High School District.
        </Text>
      </Text>
      <Text style={styles.description}>
        Mountain View's enrollment criteria aren't based solely on geography.
        Please check the school district website to see all schools serving this
        home.
      </Text>
      <Text style={styles.ratingTitle}>GreatSchools summary rating</Text>
      {schoolsData.map((item, index) => (
        <View key={index} style={styles.schoolContainer}>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{item.rating}</Text>
            <Text style={styles.ratingMax}>/10</Text>
          </View>
          <View style={styles.schoolInfo}>
            <Text style={styles.schoolName}>{item.name}</Text>
            <Text style={styles.schoolDetails}>
              {item.level} • {item.students} students • {item.distance}
            </Text>
            <View style={styles.reviewsContainer}>
              {Array.from({length: 5}, (_, i) => (
                <MaterialCommunityIcons
                  key={i}
                  name="star"
                  size={16}
                  color={
                    i < Math.round(item.rating / 2)
                      ? colors.rating
                      : colors.gray
                  }
                />
              ))}
              <Text style={styles.reviewsText}>{item.reviews} reviews</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
  },
  boldText: {
    fontWeight: 'bold',
    color: colors.secondary,
  },
  ratingTitle: {
    fontSize: 16,
    marginBottom: 8,
    textDecorationLine: 'underline',
    color: colors.darkGray,
  },
  schoolContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    padding: 16,
    backgroundColor: colors.lightGray,
    borderRadius: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 11,
  },
  rating: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingMax: {
    fontSize: 14,
    color: colors.darkGray,
  },
  schoolInfo: {
    flex: 1,
  },
  schoolName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  schoolDetails: {
    fontSize: 14,
    marginBottom: 5,
  },
  reviewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewsText: {
    fontSize: 14,
    color: colors.darkGray,
    marginLeft: 4,
  },
});

export default SchoolSection;
