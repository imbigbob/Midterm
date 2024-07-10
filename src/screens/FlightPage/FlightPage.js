import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

import DateButton from '../../components/home/DateButton.js/DateButton';
import { SIZES, icons } from '../../../constants';
import FlightView from '../../components/home/FlightView/FlightView';
import fetchFlightsFromFirestore from '../../../assets/FetchData';

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
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
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
      if (
        item.date === formattedStartDate &&
        item.returnDate === formattedEndDate &&
        item.departure === data.departure &&
        item.destination === data.destination &&
        data.people <= item.availableSeats
      )
        count++;
    }
    return count;
  };

  const getFlightInfo = (startDate, endDate) => {
    try {
      const formattedEndDate = formatDate(endDate);
      const formattedStartDate = formatDate(startDate);
      const filteredFlights = flights.filter(
        (item) =>
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
    const fetchFlights = async () => {
      const flightData = await fetchFlightsFromFirestore();
      setFlights(flightData);
      setLoading(false); // Set loading to false after data is fetched
    };
    fetchFlights();
  }, []);

  useEffect(() => {
    if (!loading) {
      const count = checkFlight(startDate, endDate);
      setCount(count);
    }
  }, [startDate, endDate, loading]);

  useEffect(() => {
    if (!loading) {
      const filteredFlights = getFlightInfo(startDate, endDate);
      if (filteredFlights) {
        setInfo(filteredFlights);
      }
    }
  }, [route, loading]);

  useEffect(() => {
    if (!loading) {

      const filteredFlights = getFlightInfo(startDate, endDate);
      if (filteredFlights) {
        setInfo(filteredFlights);
        setCount(filteredFlights.length);
      }
    }
  }, [startDate, endDate, route, loading]);

  useEffect(() => {
    if (!loading) {
      const filteredFlights = getFlightInfo(startDate, endDate);
      //range price
      let filteredInfo = filteredFlights.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
      );
      //time
      if (departureTime !== '') {
        filteredInfo = filteredInfo.filter(item => {
          const mappedDepartureTime = mapTimeToRange(item.departureTime);
          return mappedDepartureTime === departureTime;
        });
      }
      if (arrivalTime !== '') {
        filteredInfo = filteredInfo.filter(item => {
          const mappedArrivalTime = mapTimeToRange(item.arrivalTime);
          console.log('arrival', item.arrivalTime);
          return mappedArrivalTime === arrivalTime;
        });
      }
      //sort

      if (sort === 'Price') {
        filteredInfo = [...filteredInfo].sort((a, b) => a.price - b.price);
      } else if (sort === 'Lowest fare') {
        filteredInfo = [...filteredInfo].sort((a, b) => a.price - b.price);
        if (filteredInfo.length >= 1) {
          filteredInfo = [filteredInfo[0]];
        }
      }
      else if (sort === 'Departure time') {
        filteredInfo = [...filteredInfo].sort((a, b) => {
          const aTime = parseInt(a.departureTime.replace(':', ''), 10);
          const bTime = parseInt(b.departureTime.replace(':', ''), 10);
          return aTime - bTime;
        });
      }
      else if (sort === 'Arrival time') {
        filteredInfo = [...filteredInfo].sort((a, b) => {
          const aTime = parseInt(a.arrivalTime.replace(':', ''), 10);
          const bTime = parseInt(b.arrivalTime.replace(':', ''), 10);
          return aTime - bTime;
        });
      }
      else if (sort === 'Duration') {
        filteredInfo = [...filteredInfo].sort((a, b) => {
          const aDuration = computeDuration(a.departure, a.arrival);
          const bDuration = computeDuration(b.departure, b.arrival);
          const aTime = parseInt(aDuration.replace(':', ''), 10);
          const bTime = parseInt(bDuration.replace(':', ''), 10);
          return aTime - bTime;
        });
      }

      setInfo(filteredInfo);
      setCount(filteredInfo.length);
    }
  }, [sort, minPrice, maxPrice, loading, departureTime, arrivalTime]);

  function computeDuration(departure, arrival) {
    if (!departure || !arrival) return '00:00';  // Default to zero duration if times are invalid

    const [depHours, depMinutes] = departure.split(':').map(Number);
    const [arrHours, arrMinutes] = arrival.split(':').map(Number);

    if (isNaN(depHours) || isNaN(depMinutes) || isNaN(arrHours) || isNaN(arrMinutes)) {
      return '00:00';  // Default to zero duration if time values are not valid numbers
    }

    let durationHours = arrHours - depHours;
    let durationMinutes = arrMinutes - depMinutes;

    if (durationMinutes < 0) {
      durationMinutes += 60;
      durationHours -= 1;
    }

    if (durationHours < 0) {
      durationHours += 24;
    }

    return `${String(durationHours).padStart(2, '0')}:${String(durationMinutes).padStart(2, '0')}`;
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

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
    justifyContent: 'space-between',
  },
  dateText: {
    fontSize: 18,
    color: 'black',
  },
  dayText: {
    fontSize: 18,
    color: 'gray',
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FlightPage;
