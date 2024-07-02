import React from 'react';
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import DateButton from '../../components/home/DateButton.js/DateButton';
const FlightPage = ({ route }) => {
  const navigation = useNavigation();
  const { data } = route.params;
  const [startDate, setStartDate] = React.useState(new Date(data.startDate));
  const [endDate, setEndDate] = React.useState(new Date(data.endDate));
  
  return (
    <View style={{ flex: 1 }}>
      <DateButton values={{ startDate, endDate }} initialStartDate={startDate} 
        initialEndDate={endDate} 
        setStartDate={setStartDate} 
        setEndDate={setEndDate} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dateText: {
    fontSize: 18,
    color: 'black'
  },
  dayText: {
    fontSize: 18,
    color: 'gray'
  }
});

export default FlightPage;
