import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { COLORS } from '../../../constants';

const Sort = ({ values, selectedValue, setSelectedValue }) => {
  return (
    <View style={{marginTop:15}}>      
        {values.map((value) => (
          <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            key={value}
            style={[styles.button,selectedValue === value && styles.selectedButton,
            ]}
            onPress={() => {
              setSelectedValue(value);
              
            }}
          >
            {selectedValue === value && <View style={styles.innerCircle} />}
          </TouchableOpacity>
          <Text style={{alignItems:'center'}}>{value}</Text>
          </View>
        ))}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 10, // Add some horizontal margin for spacing
  },
  selectedButton: {
    backgroundColor: 'transparent',
  },
  innerCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.green,
  },
});

export default Sort;
