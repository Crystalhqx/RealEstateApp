import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import colors from '../assets/styles/colors';

const RequestSection: React.FC = () => {
  const [tourType, setTourType] = useState<string>('In-person');
  const [selectedDate, setSelectedDate] = useState<string>('Tue Aug 6');
  const [selectedTime, setSelectedTime] = useState<string>('9:00am');
  const navigation = useNavigation();
  // Mock data
  const dates = [
    'Tue Aug 6',
    'Wed Aug 7',
    'Thu Aug 8',
    'Fri Aug 9',
    'Thu Aug 10',
  ];
  const times = [
    '9:00am',
    '9:30am',
    '10:00am',
    '10:30am',
    '11:00am',
    '11:30am',
    '12:00pm',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.tourTypeContainer}>
        <TouchableOpacity
          style={[
            styles.tourTypeButton,
            tourType === 'In-person' && styles.selectedButton,
          ]}
          onPress={() => setTourType('In-person')}>
          <Text style={styles.buttonText}>In-person</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tourTypeButton,
            tourType === 'Video chat' && styles.selectedButton,
          ]}
          onPress={() => setTourType('Video chat')}>
          <Text style={styles.buttonText}>Video chat</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Select a preferred time</Text>
      <ScrollView
        horizontal
        style={styles.dateContainer}
        showsHorizontalScrollIndicator={false}>
        {dates.map(date => (
          <TouchableOpacity
            key={date}
            style={[
              styles.dateButton,
              selectedDate === date && styles.selectedButton,
            ]}
            onPress={() => setSelectedDate(date)}>
            <Text style={styles.dateText}>{date}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView
        horizontal
        style={styles.timeContainer}
        showsHorizontalScrollIndicator={false}>
        {times.map(time => (
          <TouchableOpacity
            key={time}
            style={[
              styles.timeButton,
              selectedTime === time && styles.selectedButton,
            ]}
            onPress={() => setSelectedTime(time)}>
            <Text style={styles.timeText}>{time}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.requestButton}
        onPress={() =>
          navigation.navigate('Request', {selectedDate, selectedTime})
        }>
        <Text style={styles.requestButtonText}>Request this time</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  tourTypeContainer: {
    flexDirection: 'row',
  },
  tourTypeButton: {
    flex: 1,
    marginHorizontal: 3,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.gray,
    alignItems: 'center',
  },
  selectedButton: {
    borderColor: colors.primary,
    backgroundColor: colors.third,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  dateContainer: {
    flexDirection: 'row',
  },
  dateButton: {
    padding: 10,
    marginHorizontal: 3,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 80,
  },
  dateText: {
    fontWeight: 'bold',
  },
  timeContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  timeButton: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.gray,
    alignItems: 'center',
    width: 100,
  },
  timeText: {
    fontWeight: 'bold',
  },
  requestButton: {
    margin: 4,
    padding: 15,
    backgroundColor: colors.primary,
    borderRadius: 5,
    alignItems: 'center',
  },
  requestButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RequestSection;
