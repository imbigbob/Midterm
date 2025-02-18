import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../../../constants';

const DateButton = ({ values, initialStartDate, setStartDate, handleChangeDate }) => {
  const [selectedStartDate, setSelectedStartDate] = useState(initialStartDate);

  const generateDates = (start, end) => {
    const dates = [];
    const currentDate = new Date(start);
    const dummyDate = new Date(end);
    dummyDate.setDate(dummyDate.getDate() + 1);
    while (currentDate < dummyDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const dates = generateDates(initialStartDate, values.endDate);

  const formattedDates = dates.map(date => ({
    fullDate: date,
    day: date.getDate(),
    dayOfWeek: date.toLocaleDateString('en-US', { weekday: 'short' })
  }));

  const handleDatePress = (date) => {
    setSelectedStartDate(date);
    setStartDate(date);
    handleChangeDate(date, values.endDate); // Update endDate to the correct value
  };

  return (
    <FlatList
      style={{ marginLeft: '3%' }}
      horizontal={true}
      data={formattedDates}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[
            styles.button,
            (item.fullDate.getTime() === selectedStartDate?.getTime() && styles.selectedButton)
          ]}
          onPress={() => handleDatePress(item.fullDate)}
        >
          <Text style={styles.dateText}>{item.day}</Text>
          <Text style={styles.dayText}>{item.dayOfWeek}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  dateText: {
    fontSize: 18,
    color: 'black',
  },
  dayText: {
    fontSize: SIZES.large,
    color: 'black',
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 60,
    borderRadius: 10,
    backgroundColor: COLORS.lightGray3,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  selectedButton: {
    backgroundColor: COLORS.peach,
  },
});

export default DateButton;
