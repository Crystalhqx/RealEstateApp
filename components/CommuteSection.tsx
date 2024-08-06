import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

type Commute = {
  destination: string;
  mode: string;
  time: string;
};

const CommuteSection: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [selectedMode, setSelectedMode] = useState('');
  const [commutes, setCommutes] = useState<Commute[]>([]);
  const [showAddCommute, setShowAddCommute] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleCalculateCommute = () => {
    const time = '2 hours 15 mins';
    const newCommute = {destination, mode: selectedMode, time};
    if (editIndex !== null) {
      const updatedCommutes = [...commutes];
      updatedCommutes[editIndex] = newCommute;
      setCommutes(updatedCommutes);
      setEditIndex(null);
    } else {
      setCommutes([...commutes, newCommute]);
    }
    setDestination('');
    setSelectedMode('');
    setShowAddCommute(false);
  };

  const handleDeleteCommute = (index: number) => {
    const newCommutes = [...commutes];
    newCommutes.splice(index, 1);
    setCommutes(newCommutes);
  };

  const handleEditCommute = (index: number) => {
    const commuteToEdit = commutes[index];
    setDestination(commuteToEdit.destination);
    setSelectedMode(commuteToEdit.mode);
    setEditIndex(index);
    setShowAddCommute(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.sectionTitle}>Commutes</Text>
        <TouchableOpacity onPress={() => setShowAddCommute(true)}>
          <Text style={styles.addCommuteText}>Add a commute</Text>
        </TouchableOpacity>
      </View>
      {commutes.map((commute, index) => (
        <View key={index} style={styles.commuteInfo}>
          <Text style={styles.commuteTime}>
            {commute.time}
            <Text style={styles.commuteMode}> {commute.mode}</Text>
          </Text>
          <Text style={styles.commuteDestination}>{commute.destination}</Text>
          <View style={styles.commuteActions}>
            <TouchableOpacity onPress={() => handleEditCommute(index)}>
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDeleteCommute(index)}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
      {showAddCommute ? (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Type a location or address"
            value={destination}
            onChangeText={setDestination}
          />
          <View style={styles.transportModes}>
            <TouchableOpacity
              style={[
                styles.modeButton,
                selectedMode === 'car' && styles.selectedModeButton,
              ]}
              onPress={() => setSelectedMode('car')}>
              <Text>🚗</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.modeButton,
                selectedMode === 'bike' && styles.selectedModeButton,
              ]}
              onPress={() => setSelectedMode('bike')}>
              <Text>🚲</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.modeButton,
                selectedMode === 'train' && styles.selectedModeButton,
              ]}
              onPress={() => setSelectedMode('train')}>
              <Text>🚆</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.modeButton,
                selectedMode === 'walk' && styles.selectedModeButton,
              ]}
              onPress={() => setSelectedMode('walk')}>
              <Text>🚶</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.calculateButton}
            onPress={handleCalculateCommute}>
            <Text style={styles.calculateButtonText}>
              {editIndex !== null ? 'Update Commute' : 'Calculate Commute'}
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  addCommuteText: {
    fontSize: 16,
    color: '#0A6847',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 13,
    marginHorizontal: 6,
  },
  transportModes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 13,
  },
  modeButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 6,
  },
  selectedModeButton: {
    borderColor: 'black',
  },
  calculateButton: {
    backgroundColor: 'black',
    padding: 15,
    marginHorizontal: 6,
    borderRadius: 5,
    alignItems: 'center',
  },
  calculateButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  commuteInfo: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  commuteMode: {
    fontWeight: 'bold',
  },
  commuteTime: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  commuteDestination: {
    fontSize: 14,
    color: '#333',
  },
  commuteActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  editText: {
    color: '#0A6847',
  },
  deleteText: {
    color: 'red',
  },
});

export default CommuteSection;
