import React from 'react';
import { Image, View, TextInput, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, icons, SIZES, FONT, SHADOWS } from "../../../constants";
import { useNavigation } from '@react-navigation/native';


import NumberPicker from "../../components/home/Order/Order";
import FlightBooking from "../../components/home/Stage/Stage";
import DateRangePicker from "../../components/home/Date/Date";
import ClassPicker from "../../components/home/Class/Class"; 
const TransportPage = () => {
  const navigation = useNavigation();
  const [departure, setFrom] = React.useState('New York');
  const [destination, setTo] = React.useState('Los Angeles');
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [people, setPeople] = React.useState();
  const [baby, setBaby] = React.useState();
  const [pet, setPet] = React.useState();
  const [luggage, setLuggage] = React.useState();
  const [selectedClass, setSelectedClass] = React.useState();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <FlightBooking
          departure={departure}
          setDeparture={setFrom}
          destination={destination}
          setDestination={setTo}
        />
        </View>

      <View style={{ flex: 1, flexDirection: 'row' }}>
        <DateRangePicker 
          startDate={startDate} 
          endDate={endDate} 
          setStartDate={setStartDate} 
          setEndDate={setEndDate} 
        />
      </View>

      <View style={{ flex: 1, flexDirection: 'row' }}>
        <NumberPicker
          values="People"
          selectedNumber={people}
          setSelectedNumber={setPeople}
        />
        <NumberPicker
          values="Baby"
          selectedNumber={baby}
          setSelectedNumber={setBaby}
        />
        <NumberPicker
          values="Pet"
          selectedNumber={pet}
          setSelectedNumber={setPet}
        />
        <NumberPicker
          values="Luggage"
          selectedNumber={luggage}
          setSelectedNumber={setLuggage}
        />
      </View>
      <View style={{ flex: 1 }}>
      <ClassPicker values={['Economy', 'Business', 'First Class']}
      selectedClass={selectedClass}
        setSelectedClass={setSelectedClass}
       />
       </View>
    </View>
  );
};

export default TransportPage;
