import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
const FlightBooking = () => {
  const [departure, setDeparture] = useState('New York');
  const [destination, setDestination] = useState('Los Angeles');
  
  const locations = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami'];

  const swapLocations = () => {
    const temp = departure;
    setDeparture(destination);
    setDestination(temp);
  };

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <Text>Departure:</Text>
        <Picker
          selectedValue={departure}
          style={styles.picker}
          onValueChange={(itemValue) => setDeparture(itemValue)}
        >
          {locations.map((location) => (
            <Picker.Item key={location} label={location} value={location} />
          ))}
        </Picker>
      </View>

      <View style={styles.pickerContainer}>
        <Text>Destination:</Text>
        <Picker
          selectedValue={destination}
          style={styles.picker}
          onValueChange={(itemValue) => setDestination(itemValue)}
        >
          {locations.map((location) => (
            <Picker.Item key={location} label={location} value={location} />
          ))}
        </Picker>
      </View>

      <Button title="Swap" onPress={swapLocations} />

      <Text style={styles.resultText}>Departure: {departure}</Text>
      <Text style={styles.resultText}>Destination: {destination}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  picker: {
    height: 50,
    width: 150,
  },
  resultText: {
    marginTop: 16,
  },
});

export default FlightBooking;
