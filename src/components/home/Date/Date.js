import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const swapDates = () => {
    const temp = startDate;
    setStartDate(endDate);
    setEndDate(temp);
  };

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

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text>Start Date: {startDate.toDateString()}</Text>
        <Button title="Select Start Date" onPress={() => setShowStartPicker(true)} />
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
        <Text>End Date: {endDate.toDateString()}</Text>
        <Button title="Select End Date" onPress={() => setShowEndPicker(true)} />
        {showEndPicker && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display="default"
            onChange={onChangeEnd}
          />
        )}
      </View>

      <Button title="Swap Dates" onPress={swapDates} />

      <Text style={styles.resultText}>Start Date: {startDate.toDateString()}</Text>
      <Text style={styles.resultText}>End Date: {endDate.toDateString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  dateContainer: {
    marginBottom: 16,
  },
  resultText: {
    marginTop: 16,
  },
});

export default DateRangePicker;
