import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, SIZES } from "../../../../constants";

const PickTime = ({ values, selectedValue, setSelectedValue, setValuePrevious }) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}
    >
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          style={[styles.button, selectedValue === value && styles.selectedButton]}
          onPress={() => {
            setSelectedValue(value);
            setValuePrevious(value);
          }}
        >
          <Text style={styles.dateText}>{value}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  dateText: {
    fontSize: 18,
    color: 'black',
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 124,
    height: 36,
    borderRadius: 10,
    backgroundColor: 'white',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  selectedButton: {
    backgroundColor: COLORS.peach,
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export default PickTime;
