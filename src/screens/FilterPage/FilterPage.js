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

  const handlePress = () => {
    navigation.goBack();
  };
  const ResetValues = () => {
    setFPArrivalTime();
    setFPDepartureTime();
    setFPSort();
    setFPMinPrice(50);
    setFPMaxPrice(250);
    filterData.setDeparture();
    filterData.setArrival();
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
        setMinPrevious={filterData.setMinPrice} setMaxPrevious={filterData.setMaxPrice}
      />
      <View style={{ height: 64, flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={{ backgroundColor: COLORS.peach, padding: 10, borderRadius: 10 }}
          onPress={handlePress}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>Done</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: COLORS.green, padding: 10, borderRadius: 10 }}
          onPress={ResetValues} />
      </View>
    </View>
  );
};
//Arrival time  Departure time Price  Lowest fare Duration
const styles = StyleSheet.create({
  time: {
    fontSize: SIZES.medium,
    fontFamily: 'Poppins',
  },
});

export default FilterPage;
