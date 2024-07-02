import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, TextInput, StyleSheet } from 'react-native';
import { COLORS, SIZES, icons } from "../../../../constants";

const NumberPicker = ({ values, selectedNumber, setSelectedNumber }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    const number = parseInt(text, 10);
    if (!isNaN(number) && number > 0 && values === 'People') {
      setInputValue(text);
    } 
    else if (!isNaN(number) && number >= 0 && values !== 'People') {
      setInputValue(text);
    } 
    else {
      setInputValue('');
    }
  };

  const handleSubmit = () => {
    const number = parseInt(inputValue, 10);
    if ((values === 'People' && number > 0) || (values !== 'People' && number >= 0)) {
      setSelectedNumber(number);
      setModalVisible(false);
    } else {
      alert('Invalid input. Please enter a valid number.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Image source={icons[values]} style={styles.buttonImage} />
        {selectedNumber !== 0 || values !== 'People' ? (
          <Text style={styles.selectedNumber}>{selectedNumber}</Text>
        ) : (
          <Text style={styles.selectedNumber}>0</Text>
        )}
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Enter Number</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={inputValue}
              onChangeText={handleInputChange}
            />
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonImage: {
    width: 50,
    height: 50,
  },
  selectedNumber: {
    marginLeft: 10,
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default NumberPicker;
