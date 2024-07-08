import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions, TouchableOpacity, ImageBackground, Text } from 'react-native';

import { icons } from '../../../../constants';
import { useNavigation } from '@react-navigation/native';



const FlightView = ({ info, people }) => {
  const navigation = useNavigation();


  const renderSvgElement = (flight, key) => (
    <TouchableOpacity key={key} style={styles.svgContainer}
      onPress={() => navigation.navigate('SelectedSeatPage', { flight, people })}>
      <ImageBackground source={icons.CardInfo} style={{ width: 343, height: 168,padding:10, marginTop: 20 }} >

        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, marginTop: 20 }}>
            <View>
              <Text style={styles.text}>{flight.departure}</Text>
            </View>
            <View>
              <Text style={styles.text}>{flight.destination}</Text>
            </View>

          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, marginTop: 30 }}>
            <View>
              <Text style={styles.title}> Date</Text>
              <Text style={styles.text}>{flight.date}</Text>
            </View>
            <View>
              <Text style={styles.title}> Departure</Text>
              <Text style={styles.text}>{flight.departureTime}</Text>
            </View>
            <View>
              <Text style={styles.title}> Price</Text>
              <Text style={styles.text}>{flight.price}</Text>
            </View>
            <View>
              <Text style={styles.title}> Number</Text>
              <Text style={styles.text}>NL-41</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {info.map((flight, index) => renderSvgElement(flight, index))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Poppins'
  },
  title: {
    fontSize: 10,
    color: '#01635D',
    fontFamily: 'Poppins'
  },

});
export default FlightView;
