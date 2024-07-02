import React from 'react';
import { Image, View, TextInput, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, icons, SIZES, FONT, SHADOWS } from "../../../constants";
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
const FlightPage = ({ route }) => {
  const navigation = useNavigation();
  const {data } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flight Details</Text>
      <Text style={styles.text}>Departure: {data.departure}</Text>
      <Text style={styles.text}>Destination: {data.destination}</Text>
      <Text style={styles.text}>Start Date: {data.startDate.toDateString()}</Text>
      <Text style={styles.text}>End Date: {data.endDate.toDateString()}</Text>
      <Text style={styles.text}>People: {data.people}</Text>
      <Text style={styles.text}>Baby: {data.baby}</Text>
      <Text style={styles.text}>Pet: {data.pet}</Text>
      <Text style={styles.text}>Luggage: {data.luggage}</Text>
      <Text style={styles.text}>Selected Class: {data.selectedClass}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default FlightPage;