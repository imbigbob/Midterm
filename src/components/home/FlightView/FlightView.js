import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Svg, { Image, Text as SvgText, G } from 'react-native-svg';
import { icons } from '../../../../constants';

const App = () => {
  const renderSvgElement = (key) => (
    <View key={key} style={styles.svgContainer}>
      <Svg height="100%" width="100%" viewBox="0 0 100 100">
        <G transform="translate(5,5)">
          <Image
            href={icons.CardTransports}
            width="90%"
            height="90%"
            preserveAspectRatio="xMidYMid meet"
          />
          <SvgText
            x="50%"
            y="10%"
            fill="black"
            fontSize="5"
            fontWeight="bold"
            stroke="black"
            strokeWidth="0.2"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {"Top Center Text"}
          </SvgText>
          <SvgText
            x="50%"
            y="80%"
            fill="black"
            fontSize="5"
            fontWeight="bold"
            stroke="black"
            strokeWidth="0.2"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {"Bottom Center Text"}
          </SvgText>
        </G>
      </Svg>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {Array.from({ length: 5 }).map((_, index) => renderSvgElement(index))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgContainer: {
    width: '100%',
    height: 300, // Adjust height as needed
    marginVertical: 10, // Spacing between SVG elements
  },
});

export default App;
