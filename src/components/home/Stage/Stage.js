import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import{ icons} from '../../../../constants'; 
const FlightBooking = ({ departure, setDeparture, destination, setDestination }) => {
    const locations = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami'];
  
    const swapLocations = () => {
      const temp = departure;
      setDeparture(destination);
      setDestination(temp);
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.pickerContainer}>
          <Text style={styles.label}>From:</Text>
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
        
        <TouchableOpacity style={styles.switchButton} onPress={swapLocations}>
          <Image source={icons.leftA}  style={styles.switchIcon} />
          <Image source={icons.rightA} style={styles.switchIcon} />
        </TouchableOpacity>
        
        <View style={styles.pickerContainer}>
          <Text style={styles.label}>To:</Text>
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
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      padding: '3%',
      borderRadius: 10,
    },
    pickerContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginBottom: 16,
    },
    picker: {
      height: 50,
      width: 150,
    },
    switchButton: {
      marginHorizontal: 10,
      padding: 10,
      backgroundColor: '#ffa500',
      borderRadius: 50,
      flexDirection: 'column',
      alignItems: 'center',
    },
    switchIcon: {
      fontSize: 18,
      color: '#fff',
      marginHorizontal: 5,
    },
    label: {
      fontSize: 12,
      color: '#888',
    },
  });
  
  export default FlightBooking;