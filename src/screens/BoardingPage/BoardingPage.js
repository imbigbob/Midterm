import React from 'react';
import { ScrollView, View, Image, ImageBackground, Text, TouchableOpacity,StyleSheet } from 'react-native';
import { icons } from '../../../constants';
import {  useState } from 'react';
const BoardingPage = ({ route }) => {
  const { flight, chosenSeats} = route.params;
  const rowMapping = ['A', 'B', 'C', 'D'];
  const dataSeatArray = Object.values(chosenSeats);
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
                    <Text style={styles.text}>NL82-1</Text>
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
      
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={{
          backgroundColor: '#FEA36B'
          , justifyContent: 'center', alignItems: 'center', height: 50, borderRadius: 20, padding: 20
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
