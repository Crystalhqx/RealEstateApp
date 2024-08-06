import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const RequestSection: React.FC = () => {
  const [tourType, setTourType] = useState<string>('In-person');
  const [selectedDate, setSelectedDate] = useState<string>('Tue Aug 6');
  const [selectedTime, setSelectedTime] = useState<string>('9:00am');

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
      <View style={styles.dateContainer}>
        {dates.map(date => (
          <TouchableOpacity
            key={date}
            style={[
              styles.dateButton,
              selectedDate === date && styles.selectedDateButton,
            ]}
            onPress={() => setSelectedDate(date)}>
            <Text style={styles.dateText}>{date}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.timeContainer}>
        {times.map(time => (
          <TouchableOpacity
            key={time}
            style={[
              styles.timeButton,
              selectedTime === time && styles.selectedTimeButton,
            ]}
            onPress={() => setSelectedTime(time)}>
            <Text style={styles.timeText}>{time}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Request this time</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  tourTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tourTypeButton: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  selectedButton: {
    borderColor: '#0A6847',
  },
  buttonText: {
    fontWeight: 'bold',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 90,
  },
  dateButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 3,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedDateButton: {
    borderColor: '#0A6847',
  },
  dateText: {
    fontWeight: 'bold',
  },
  timeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  timeButton: {
    flexBasis: '45%',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  selectedTimeButton: {
    borderColor: '#0A6847',
  },
  timeText: {
    fontWeight: 'bold',
  },
  nextButton: {
    margin: 8,
    padding: 15,
    backgroundColor: 'black',
    borderRadius: 5,
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RequestSection;
