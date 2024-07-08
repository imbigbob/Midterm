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
  const [maxPrice, setMaxPrice] = useState(1000);
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
  const timeMappingValues = {
    '06AM-12PM': [6, 12],
    '12PM-06PM': [12, 18],
    '06PM-12AM': [18, 24],
    '12AM-06AM': [0, 6],
  };
  const getTimes = (value) => {
    const time=value.slice(0,2);
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
  const mapTimeToRange = (time) => {
    const hour = parseInt(time.slice(0, 2), 10);
    if (hour >= 6 && hour < 12) return '06AM-12PM';
    if (hour >= 12 && hour < 18) return '12PM-06PM';
    if (hour >= 18 && hour < 24) return '06PM-12AM';
    if (hour >= 0 && hour < 6) return '12AM-06AM';
    return '';
  };
  useEffect(() => {
    const count = checkFlight(startDate, endDate);
    console.log(count);
    setCount(count);
  }, [startDate, endDate]);

  useEffect(() => {
    const filteredFlights = getFlightInfo(startDate, endDate);
    if (filteredFlights) {
      setInfo(filteredFlights);
    }
  }, [route]);

  useEffect(() => {
    const filteredFlights = getFlightInfo(startDate, endDate);
    if (filteredFlights) {
      setInfo(filteredFlights);
    }
    if(sort === 'Price'){
      
      setInfo((prevInfo) => [...prevInfo].sort((a, b) => a.price - b.price));
      setCount(filteredFlights.length);
    }
    else if (sort === 'Lowest fare') {
      // Sort and then take the first element, wrapping it in an array
      const sorted = [...info].sort((a, b) => a.price - b.price);
      if (sorted.length >= 1) {
        setInfo([sorted[0]]);
        setCount(1);
      }
    }

  }, [sort]);
  useEffect(() => {
    // Fetch and set the initial flight info based on startDate and endDate
    const filteredFlights = getFlightInfo(startDate, endDate);
    if (filteredFlights) {
      setInfo(filteredFlights);
      setCount(filteredFlights.length);
      console.log('Initial filtered flights:', filteredFlights);
    }
  }, [startDate, endDate, route]);
  
  useEffect(() => {
    // Filter the flight info based on minPrice and maxPrice
    console.log('Filtering info based on price range:', minPrice, maxPrice);
    if (info.length > 0) {
      const filteredInfo = info.filter(item => item.price >= minPrice && item.price <= maxPrice);
      setInfo(filteredInfo);
      setCount(filteredInfo.length);
      console.log('Filtered info:', filteredInfo);
    } else {
      console.log('Info is empty:', info);
    }
  }, [minPrice, maxPrice]);
  
 
  


  // useEffect(() => {
  //   if (info.length > 0) {
  //     const filteredByDeparture = info.filter(item => {
  //       const mappedDepartureTime = mapTimeToRange(item.departureTime);
  //       return mappedDepartureTime === departureTime;
  //     });

  //     const filteredByArrival = filteredByDeparture.filter(item => {
  //       const mappedArrivalTime = mapTimeToRange(item.arrivalTime);
  //       return mappedArrivalTime === arrivalTime;
  //     });

  //     setInfo(filteredByArrival);
  //     setCount(filteredByArrival.length);
  //   }
  // }, [departureTime, arrivalTime]);

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
