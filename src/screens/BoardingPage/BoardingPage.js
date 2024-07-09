import React from 'react';
import { ScrollView, View, Image, ImageBackground, Text, TouchableOpacity,StyleSheet } from 'react-native';
import { icons } from '../../../constants';
import {  useState,useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
const BoardingPage = ({ route }) => {
  const { flight, chosenSeats} = route.params;
  const rowMapping = ['A', 'B', 'C', 'D'];
  const dataSeatArray = Object.values(chosenSeats);
 // Function to update the flight document in Firestore
 const updateFlight = async (id, updatedFlight) => {
  try {
    await firestore().collection('Flight').doc(id.toString()).update(updatedFlight);
    console.log('Flight successfully updated!');
  } catch (error) {
    console.error('Error updating flight: ', error);
  }
};

useEffect(() => {
  // Update the seat matrices based on chosenSeats
  dataSeatArray.forEach(seat => {
    const { rowIndex, seatIndex } = seat;

    if (flight.seatMatrix && flight.seatMatrix[rowIndex]) {
      console.log(rowIndex, seatIndex)
      flight.seatMatrix[rowIndex][seatIndex] = 0.5; 
      console.log(flight.seatMatrix);
    }
    console.log(dataSeatArray.length);
    console.log(flight.availableSeats);
    
    
  });
  flight.availableSeats-=dataSeatArray.length;
  console.log(flight.availableSeats);
  console.log(flight.id);
  // Save the updated flight back to Firestore
  updateFlight(flight.id, {
    seatRow1: flight.seatMatrix[0],
    seatRow2: flight.seatMatrix[1],
    seatRow3: flight.seatMatrix[2],
    seatRow4: flight.seatMatrix[3],
    availableSeats: flight.availableSeats,
  });
}, []);
  return (

    <View style={{ flex: 1 }}>

      <View style={{ flex: 9 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {dataSeatArray.map((seat, index) => (
            <View key={index} style={{ justifyContent: 'center', alignItems: 'center',marginBottom:10 }}>
              <View style={{ width: 343, height: 566, justifyContent: 'center', alignItems: 'center', paddingBottom: 20 }}>
                <ImageBackground source={icons.Boarding} style={{ width: 343, height: 566 }} >
                  <View style={{ width: 343, height: 40, justifyContent: 'center', alignItems: 'center', marginTop: 200 }}>
                    <Text style={styles.text}>American Airways Flight NL-41</Text>
                  </View>
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={icons.Divider} />
                  </View>
                  <View style={{
                    minWidth: '100%', justifyContent: 'space-between', alignItems: 'center', marginTop: 20,
                    flexDirection: 'row', padding: 15
                  }}>
                    <Text style={styles.text}>{flight.departure}</Text>
                    <Image source={icons.PlaneLine} />
                    <Text style={styles.text}>{flight.destination}</Text>
                  </View>

                  <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', padding: 15 }}>
                    <View style={{paddingRight:20}}>
                      <Text style={styles.title}> Date</Text>
                      <Text style={styles.text}>{flight.date}</Text>

                      </View>
                      <View >
                      <Text style={styles.title}> Time</Text>
                    <Text style={styles.text}>{flight.departureTime}</Text>
                    </View>

                  </View>

                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={icons.Divider} />
                  </View>

                  <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', padding: 20 }}>
                  <View style={{paddingRight:20}}>
                      <Text style={styles.title}> Gate</Text>
                    <Text style={styles.text}>Customer {index + 1}</Text>
                    </View>
                    <View style={{paddingRight:20}}>
                      <Text style={styles.title}> Flight</Text>
                    <Text style={styles.text}>AM -{flight.id}</Text>
                    </View>
                    <View style={{paddingRight:20}}>
                      <Text style={styles.title}> Class</Text>
                    <Text style={styles.text}>{flight.class}</Text>
                    </View>
                    <View style={{paddingRight:20}}>
                      <Text style={styles.title}> Seat</Text>
                    {seat && rowMapping[seat.rowIndex] !== undefined && seat.seatIndex !== undefined ? (
                      <Text style={styles.text}>{rowMapping[seat.rowIndex]}{seat.seatIndex + 1}</Text>
                    ) : (
                      <Text>Seat information unavailable</Text>
                    )}
                    </View>
                  </View>

                  <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <Image source={icons.Code} />
                  </View>
                </ImageBackground>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      
      <View style={{ flex: 1,padding:20 }}>
        <TouchableOpacity style={{
          backgroundColor: '#FEA36B'
          , justifyContent: 'center', alignItems: 'center', height: 60, borderRadius: 20
        }}>
          <Text style={{ color: 'white' }}>Download Ticket</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'black',
    
    fontFamily:'Poppins'
  },  
  title:{
    fontSize: 10,
    color: '#01635D',
    fontFamily:'Poppins'
  },
});
export default BoardingPage;
