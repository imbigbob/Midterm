import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Svg, { Image, Text as SvgText, G } from 'react-native-svg';
import { icons } from '../../../../constants';
import { useNavigation } from '@react-navigation/native';

import flights from '../../../../assets/Data';

const FlightView = ({ info,people }) => {
  const navigation = useNavigation();


  const renderSvgElement = (flight, key) => (
    <TouchableOpacity key={key} style={styles.svgContainer}
     onPress={ ()=>navigation.navigate('SelectedSeatPage', { flight ,people})}>
      <Svg  height="100%" width="100%" viewBox="0 0 100 100">
        <G transform="translate(5,5)">
          <Image
            href={icons.CardInfo}
            width="90%"
            height="90%"
            preserveAspectRatio="xMidYMid meet"
          />
          <SvgText
            x="15%"
            y="33%"
            fill="black"
            fontSize="4"
            fontFamily='Poppins-Bold'
            strokeWidth="0.2"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {flight.departure}
          </SvgText>
          <SvgText
            x="75%"
            y="33%"
            fill="black"
            fontSize="4"
            strokeWidth="0.2"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {flight.destination}
          </SvgText>
          <SvgText
            x="15%"
            y="60%"
            fill="black"
            fontSize="4"
            fontFamily='Poppins-Bold'
            strokeWidth="0.2"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {flight.date}
          </SvgText>
          <SvgText
            x="35%"
            y="60%"
            fill="black"
            fontSize="4"
            fontFamily='Poppins-Bold'
            strokeWidth="0.2"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {flight.departureTime}
          </SvgText>
          <SvgText
            x="60%"
            y="60%"
            fill="black"
            fontSize="4"
            fontFamily='Poppins-Bold'
            strokeWidth="0.2"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {flight.price}
          </SvgText>
          <SvgText
            x="80%"
            y="60%"
            fill="black"
            fontSize="4"
            fontFamily='Poppins-Bold'
            strokeWidth="0.2"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            NL-41
          </SvgText>
        </G>
      </Svg>
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
  svgContainer: {
    width: '100%',
    height: Dimensions.get('window').height / 2, // Adjust height to half of the screen height
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
     backgroundColor:'red',// Spacing between SVG elements
     marginVertical: 10,
  },
});

export default FlightView;
