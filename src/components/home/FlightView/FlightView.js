import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import Svg, { Image, Text as SvgText, G } from 'react-native-svg';
import { icons } from '../../../../constants';

const FlightView = ({ info }) => {
  const renderSvgElement = (flight, key) => (
    <View key={key} style={styles.svgContainer}>
      <Svg height="100%" width="100%" viewBox="0 0 100 100">
        <G transform="translate(5,5)">
          <Image
            href={icons.CardInfo}
            width="90%"
            height="90%"
            preserveAspectRatio="xMidYMid meet"
          />
          <SvgText
            x="20%"
            y="30%"
            fill="black"
            fontSize="4"
            fontWeight="Poppins-Bold"
            stroke="black"
            strokeWidth="0.2"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {flight.departure}
          </SvgText>
          <SvgText
            x="50%"
            y="30%"
            fill="black"
            fontSize="5"
            fontWeight="bold"
            stroke="black"
            strokeWidth="0.2"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {flight.destination}
          </SvgText>
          <SvgText
            x="50%"
            y="60%"
            fill="black"
            fontSize="5"
            fontWeight="bold"
            stroke="black"
            strokeWidth="0.2"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {flight.date}
          </SvgText>

          <SvgText
            x="50%"
            y="50%"
            fill="black"
            fontSize="5"
            fontWeight="bold"
            stroke="black"
            strokeWidth="0.2"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {flight.price}
          </SvgText>
          <SvgText
            x="50%"
            y="50%"
            fill="black"
            fontSize="5"
            fontWeight="bold"
            stroke="black"
            strokeWidth="0.2"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {flight.departureTime}
            </SvgText>
        </G>
      </Svg>
    </View>
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
    marginVertical: 10, // Spacing between SVG elements
  },
});

export default FlightView;
