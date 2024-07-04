import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Touchable, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { SIZES } from '../../../constants';

import SeatMatrix from '../../components/home/SeatMatrix/SeatMatrix'; 
const SelectedSeatPage = ({ route }) => {
    const navigation = useNavigation();
    const { flight, people } = route.params;
    const [seatMatrix, setSeatMatrix] = useState([]);
    const [choosenSeat, setChoosenSeat] = useState([]);
    const [customer, setCustomer] = useState(1);

    const handlePress = (item) => {
        setCustomer(item);
    }
    useEffect(() => {
        const seatMatrix = flight.seatMatrix

        setSeatMatrix(seatMatrix);
    }, [flight]);
    //const people =people;
    return (
        <View style={styles.container}>
            <View style={{flex:1}}>
            <Text>Traveller</Text>
            <ScrollView horizontal={true} >
                {Array.from({ length: Number(people) }, (_, i) => i + 1).map((item, index) => (
                    <View key={index} style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={[styles.button, customer === item &&
                            styles.selectedButton]} onPress={() => handlePress(item)}>
                            <Text>{item}</Text>

                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

            <View style={{
                flex: 1, flexDirection: 'row', justifyContent: 'space-between',
                width: '100%', paddingLeft: 60, paddingRight: 60
            }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ height: 20, width: 20, backgroundColor: '#FEA36B', borderRadius: 5 }}></View>
                    <Text style={{ paddingLeft: '10px' }}> Selected</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ height: 20, width: 20, backgroundColor: '#089083', borderRadius: 5 }}></View>
                    <Text style={{ paddingLeft: '10px' }}> Booked</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ height: 20, width: 20, backgroundColor: '#B7DFDB', borderRadius: 5 }}></View>
                    <Text style={{ paddingLeft: '10px' }}> Available</Text>
                </View>
            </View>
            <View style={{
                flex: 1, flexDirection: 'row', justifyContent: 'space-between',
                width: '100%', paddingLeft: 60, paddingRight: 60
            }}>
                <Text style={{ paddingLeft: '10px' }}> A</Text>
                <Text style={{ paddingLeft: '10px' }}> B</Text>
                <Text style={{ paddingLeft: '10px' }}> C</Text>
                <Text style={{ paddingLeft: '10px' }}> D</Text>
            </View>
            </View>
  <View style={{flex:3}}>
            <SeatMatrix seatMatrix={seatMatrix} customer={customer} />
            </View>
            <View style={{ flex: 2 ,backgroundColor:'white'}}>
                </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    button: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectedButton: {

        backgroundColor: 'coral',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default SelectedSeatPage;
