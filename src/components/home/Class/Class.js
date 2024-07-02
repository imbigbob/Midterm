import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SIZES } from "../../../../constants";

const ClassPicker = ({ label,values, selectedClass, setSelectedClass }) => {
  const [modalVisible, setModalVisible] = useState(false);
  
  const handleClassSelect = (value) => {
    setSelectedClass(value);
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{marginLeft:'3%'}}><Text style={{fontSize: SIZES.medium}}> {label}</Text></View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {values.map((value) => (
          <TouchableOpacity
            key={value}
            style={[styles.button, selectedClass === value && styles.selected]}
            onPress={() => handleClassSelect(value)}
          >
            <Text style={[styles.buttonText,selectedClass===value&&styles.selectedText]}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
    borderRadius: 10,
    backgroundColor: COLORS.lightGray3,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  buttonText: {
    fontSize: SIZES.medium,
    color: COLORS.green,
  },
  selected: {
    backgroundColor: 'coral',
  },
  selectedClass: {
    color: 'white',
  },
  selectedText: {
    color: 'white',
  },
});

export default ClassPicker;
