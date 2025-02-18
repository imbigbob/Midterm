import React from 'react';
import { StyleSheet, Image, ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { icons } from '../../../../constants';

const Card = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View>
        <Image style={styles.card} source={icons.CardHotels} />
        <TouchableOpacity onPress={() => navigation.navigate('Transport')}>
          <Image style={styles.card} source={icons.CardTransports} />
        </TouchableOpacity>
        <Image style={styles.card} source={icons.CardEvents} />
        <Image style={styles.card} source={icons.CardTrips} />
      </View>
    </ScrollView>
  );
};

const styles = {
  card: {
    marginTop: '2%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
}
export default Card;
