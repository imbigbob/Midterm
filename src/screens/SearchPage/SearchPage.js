// SearchResultsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchResultsScreen = ({ route }) => {
  const { query } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search Results for: {query}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default SearchResultsScreen;
