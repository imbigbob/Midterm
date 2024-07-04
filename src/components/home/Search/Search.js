import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {icons} from '../../../../constants';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  const handleSearch = () => {
    navigation.navigate('SearchResults', { query: searchQuery });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <TouchableOpacity style={styles.iconContainer} onPress={handleSearch}>
        <Image source={icons.Magnify} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
  },
  iconContainer: {
    backgroundColor: '#FFA07A',
    padding: 10,
    borderRadius: 25,
    marginLeft: 10,
  },
});

export default SearchComponent;
