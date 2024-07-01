import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, FlatList, StyleSheet } from 'react-native';
import { COLORS, SIZES, icons } from "../../../../constants";

const NumberPicker = ({ values, selectedNumber, setSelectedNumber }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => {
        setSelectedNumber(item);
        setModalVisible(false);
      }}
    >
      <Text style={styles.listItemText}>{item}</Text>
    </TouchableOpacity>
  );

  const numbers = Array.from({ length: 100 }, (_, i) => i + 1); // Adjust the length as needed

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Image source={icons[values]} style={styles.buttonImage} />
        {selectedNumber !== 0 && <Text style={styles.selectedNumber}>{selectedNumber}</Text>}
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <FlatList
            data={numbers}
            keyExtractor={(item) => item.toString()}
            renderItem={renderItem}
            style={styles.list}
          />
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
  list: {
    backgroundColor: 'white',
    width: '80%',
    maxHeight: '80%',
  },
  listItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  listItemText: {
    fontSize: 18,
  },
});

export default NumberPicker;
