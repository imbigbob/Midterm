import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, PanResponder } from 'react-native';

const PriceRangeSlider = ({
  minFPPrice,
  maxFPPrice,
  setMinPrice,
  setMaxPrice,
  setMinPrevious,
  setMaxPrevious
}) => {
  const [low, setLow] = useState(minFPPrice);
  const [high, setHigh] = useState(maxFPPrice);

  const [lowPosition, setLowPosition] = useState((minFPPrice / 1000) * 300);
  const [highPosition, setHighPosition] = useState((maxFPPrice / 1000) * 300);

  const sliderWidth = 300;
  const thumbWidth = 20;

  useEffect(() => {
    setLow(minFPPrice);
    setLowPosition((minFPPrice / 1000) * sliderWidth);
    setHigh(maxFPPrice);
    setHighPosition((maxFPPrice / 1000) * sliderWidth);
  }, [minFPPrice, maxFPPrice]);

  const lowPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      const newLow = Math.min(
        Math.max(0, lowPosition + gestureState.dx),
        highPosition - thumbWidth
      );
      const newLowValue = Math.round((newLow / sliderWidth) * 1000);
      setLowPosition(newLow);
      setLow(newLowValue);
      setMinPrice(newLowValue);
     
    },
  });

  const highPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      const newHigh = Math.max(
        Math.min(sliderWidth, highPosition + gestureState.dx),
        lowPosition + thumbWidth
      );
      const newHighValue = Math.round((newHigh / sliderWidth) * 1000);
      setHighPosition(newHigh);
      setHigh(newHighValue);
      setMaxPrice(newHighValue);
      
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Price Range</Text>
      <View style={styles.sliderContainer}>
        <View style={styles.track} />
        <View style={[styles.selectedTrack, { left: lowPosition, right: sliderWidth - highPosition }]} />
        <View
          style={[styles.thumb, { left: lowPosition - thumbWidth / 2 }]}
          {...lowPanResponder.panHandlers}
        />
        <View
          style={[styles.thumb, { left: highPosition - thumbWidth / 2 }]}
          {...highPanResponder.panHandlers}
        />
      </View>
      <View style={styles.priceContainer}>
        <View style={styles.priceBox}>
          <Text style={styles.priceLabel}>From</Text>
          <TextInput
            style={styles.priceValue}
            value={String(low)}
            keyboardType="numeric"
            onChangeText={(value) => {
              const numericValue = Number(value);
              if (numericValue >= 0 && numericValue <= high) {
                setLow(numericValue);
                setLowPosition((numericValue / 1000) * sliderWidth);
                setMinPrice(numericValue);
                
              }
            }}
          />
        </View>
        <View style={styles.priceBox}>
          <Text style={styles.priceLabel}>To</Text>
          <TextInput
            style={styles.priceValue}
            value={String(high)}
            keyboardType="numeric"
            onChangeText={(value) => {
              const numericValue = Number(value);
              if (numericValue >= low && numericValue <= 1000) {
                setHigh(numericValue);
                setHighPosition((numericValue / 1000) * sliderWidth);
                setMaxPrice(numericValue);
                
              }
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sliderContainer: {
    position: 'relative',
    width: 300,
    height: 40,
    justifyContent: 'center',
  },
  track: {
    position: 'absolute',
    height: 4,
    backgroundColor: '#d3d3d3',
    width: '100%',
    borderRadius: 2,
  },
  selectedTrack: {
    position: 'absolute',
    height: 4,
    backgroundColor: '#008080',
    borderRadius: 2,
  },
  thumb: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#008080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  priceBox: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  priceLabel: {
    fontSize: 16,
    color: '#888',
  },
  priceValue: {
    fontSize: 16,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 5,
    textAlign: 'center',
    width: 60,
  },
});

export default PriceRangeSlider;
