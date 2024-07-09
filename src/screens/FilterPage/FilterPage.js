import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../../../constants";
import PickTime from "../../components/home/PickTime/PickTime";
import Sort from "../../components/home/Sort";
import PriceRangeSlider from '../../components/home/PriceRangeSlider';
import { useNavigation } from '@react-navigation/native';

const FilterPage = ({ route }) => {
  const navigation = useNavigation();
  const { filterData } = route.params;
  const [FPdepartureTime, setFPDepartureTime] = useState(filterData.departureTime);
  const [FParrivalTime, setFPArrivalTime] = useState(filterData.arrivalTime);
  const [FPminPrice, setFPMinPrice] = useState(filterData.minPrice);
  const [FPmaxPrice, setFPMaxPrice] = useState(filterData.maxPrice);
  const [FPsort, setFPSort] = useState(filterData.sort);
  const timeMappingValues = {
    '06AM-12PM': 1,
    '12PM-06PM': 2,
    '06PM-12AM': 3,
    '12AM-06AM': 4
  };

  const isDepartureSmallerThanArrival = (departure, arrival) => {
    return timeMappingValues[departure] <= timeMappingValues[arrival];
  };
  const handlePress = () => {
    // if (!isDepartureSmallerThanArrival(FPdepartureTime, FParrivalTime)) {
    //   alert('Departure time must be smaller than Arrival time');
    //   return;
    // }
    filterData.setDeparture(FPdepartureTime);
    filterData.setArrival(FParrivalTime);
    filterData.setMinPrice(FPminPrice);
    filterData.setMaxPrice(FPmaxPrice);
    filterData.setSort(FPsort);
    navigation.goBack();
  };
  const ResetValues = () => {
    setFPArrivalTime();
    setFPDepartureTime();
    setFPSort();
    setFPMinPrice(50);
    setFPMaxPrice(250);
    filterData.setDeparture('');
    filterData.setArrival('');
    filterData.setMinPrice(50);
    filterData.setMaxPrice(250);
    filterData.setSort();
  }

  return (
    <View>
      <View style={{ height: 64 }}>

        <Text style={styles.time}>Departure</Text>
        <PickTime
          values={['06AM-12PM', '12PM-06PM', '06PM-12AM', '12AM-06AM']}
          selectedValue={FPdepartureTime}
          setSelectedValue={setFPDepartureTime}
          setValuePrevious={filterData.setDeparture}
        />
      </View>
      <View style={{ height: 64 }}>
        <Text style={styles.time}>Arrival</Text>
        <PickTime
          values={['06AM-12PM', '12PM-06PM', '06PM-12AM', '12AM-06AM']}
          selectedValue={FParrivalTime}
          setSelectedValue={setFPArrivalTime}
          setValuePrevious={filterData.setArrival}
        />
      </View>

      <View>
        <Sort values={['Arrival time', 'Departure time', 'Price', 'Lowest fare', 'Duration']}
          selectedValue={FPsort}
          setSelectedValue={setFPSort}
          setValuePrevious={filterData.setSort}
        />
      </View>

      <PriceRangeSlider minFPPrice={FPminPrice} maxFPPrice={FPmaxPrice}
        setMinPrice={setFPMinPrice} setMaxPrice={setFPMaxPrice}
      />

      <View style={{
        flexDirection: 'row', justifyContent: 'space-between',
        padding: 10
      }}>
        <TouchableOpacity style={styles.button}
          onPress={ResetValues} >
          <Text style={styles.textButton}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.selectedButton}
          onPress={handlePress}
        >
          <Text style={styles.selectedTextButton}>Done</Text>
        </TouchableOpacity>


      </View>
    </View>
  );
};
//Arrival time  Departure time Price  Lowest fare Duration
const styles = StyleSheet.create({
  time: {
    fontSize: SIZES.medium,
    fontFamily: 'Poppins',
    fontSIZE:40,
    fontWeight: 'bold',
  },
  textButton: {
    color: COLORS.peach,
    textAlign: 'center',
    fontSIZE:40,
    fontWeight: '700',
  },
  selectedTextButton: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
  },
  button: {
    width: 160,
    height: 60,
    backgroundColor: COLORS.green,

    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#FEA36B',
    
    width: 160,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

export default FilterPage;
