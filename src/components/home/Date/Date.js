import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateRangePicker = ({ startDate, endDate, setStartDate, setEndDate }) => {
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const onChangeStart = (event, selectedDate) => {
    setShowStartPicker(false);
    if (selectedDate) {
      setStartDate(selectedDate);
    }
  };

  const onChangeEnd = (event, selectedDate) => {
    setShowEndPicker(false);
    if (selectedDate) {
      setEndDate(selectedDate);
    }
  };
   
  const checkDate = () => {
    if (startDate > endDate) {
      alert('End date must be after start date');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setShowStartPicker(true)}>
          <Text>Start Date: {startDate.toDateString()}</Text>
        </TouchableOpacity>
        {showStartPicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display="default"
            onChange={onChangeStart}
          />
        )}
      </View>

      <View style={styles.dateContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setShowEndPicker(true)}>
          <Text>End Date: {endDate.toDateString()}</Text>
        </TouchableOpacity>
        {showEndPicker && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display="default"
            onChange={onChangeEnd}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-between',
    flexDirection: 'row',

  },
  dateContainer: {
    marginBottom: '3%',
    marginLeft: '5%',
    marginRight: '5%',
    minWidth: '40%',
  },
  button: {
    padding: 10,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
  resultText: {
    marginTop: 16,
  },
});

export default DateRangePicker;
