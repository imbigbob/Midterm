import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import DateButton from '../../components/home/DateButton.js/DateButton';
import flights from '../../../assets/FlightData';
import { SIZES, icons } from '../../../constants';
import FlightView from '../../components/home/FlightView/FlightView';

const FlightPage = ({ route }) => {
  const navigation = useNavigation();
  const { data } = route.params;
  const [startDate, setStartDate] = useState(new Date(data.startDate));
  const [endDate, setEndDate] = useState(new Date(data.endDate));
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState([]);
  const [departureTime, setDeparture] = useState('');
  const [arrivalTime, setArrival] = useState('');
  const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(250);
  const [sort, setSort] = useState('');
  const initialStartDate = new Date(data.startDate);
  const filterData = {
    departureTime,
    arrivalTime,
    minPrice,
    maxPrice,
    sort,
    setDeparture,
    setArrival,
    setMinPrice,
    setMaxPrice,
    setSort,
  };

  const handleFilter = () => {
    navigation.navigate('FilterPage', { filterData });
  };

  const formatDate = (date) => {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  };

  const checkFlight = (startDate, endDate) => {
    let count = 0;
    const formattedEndDate = formatDate(endDate);
    const formattedStartDate = formatDate(startDate);
    for (let item of flights) {
      if (item.date === formattedStartDate &&
        item.returnDate === formattedEndDate &&
        item.departure === data.departure &&
        item.destination === data.destination &&
        data.people <= item.availableSeats)
        count++;
    }
    return count;
  };

  const getFlightInfo = (startDate, endDate) => {
    try {
      const formattedEndDate = formatDate(endDate);
      const formattedStartDate = formatDate(startDate);
      const filteredFlights = flights.filter(item =>
        item.date === formattedStartDate &&
        item.returnDate === formattedEndDate &&
        item.departure === data.departure &&
        item.destination === data.destination &&
        data.people <= item.availableSeats
      );
      return filteredFlights;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const handleChangeDate = (startDate, endDate) => {
    const filteredFlights = getFlightInfo(startDate, endDate);
    if (filteredFlights) {
      setInfo(filteredFlights);
      setCount(filteredFlights.length);
    }
    
  };

  useEffect(() => {
    console.log(data);
  }, []);

  useEffect(() => {
    const count = checkFlight(startDate, endDate);
    setCount(count);
  }, [startDate, endDate]);

  useEffect(() => {
    const filteredFlights = getFlightInfo(startDate, endDate);
    if (filteredFlights) {
      setInfo(filteredFlights);
    }
  }, [route]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 120 }}>
        <DateButton
          values={{ startDate, endDate }}
          initialStartDate={initialStartDate}
         
          setStartDate={setStartDate}
          handleChangeDate={handleChangeDate}
        />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 14 }}>
        <Text style={{ fontSize: SIZES.large, paddingLeft: 5 }}>
          {count} available from {data.departure} to {data.destination}.
        </Text>
        <TouchableOpacity
          style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: '#FEA36B', alignItems: 'center', justifyContent: 'center' }}
          onPress={handleFilter}>
          <Image source={icons.filter} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <FlightView info={info} people={data.people} />
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
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#FEA36B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
});

export default FlightPage;
