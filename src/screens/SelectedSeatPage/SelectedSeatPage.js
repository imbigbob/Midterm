import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SeatMatrix from '../../components/home/SeatMatrix/SeatMatrix';

const SelectedSeatPage = ({ route }) => {
    const navigation = useNavigation();
    const { flight, people } = route.params;
    const [seatMatrix, setSeatMatrix] = useState([]);
    const [chosenSeats, setChosenSeats] = useState({});
    const [customer, setCustomer] = useState(1);
    const [countChosenSeat, setCountChosenSeat] = useState(0);
    const rowMapping = ['A', 'B', 'C', 'D'];
    const handlePress = (item) => {
        setCustomer(item);
    };

    useEffect(() => {
        setSeatMatrix(flight.seatMatrix);
        const updatedMatrix = [...flight.seatMatrix];
        for (let i = 0; i < updatedMatrix.length; i++) {
            for (let j = 0; j < updatedMatrix[i].length; j++) {
                if (updatedMatrix[i][j] > 0.5) {
                    updatedMatrix[i][j] = 0;
                }
            }
        }
        setSeatMatrix(updatedMatrix);
    }, [flight]);

    const handleSeatSelect = (rowIndex, seatIndex) => {
        const updatedMatrix = [...seatMatrix];
        const seatStatus = updatedMatrix[rowIndex][seatIndex];

        if (seatStatus === 0.5) return; // Do nothing if the seat is booked

        const currentCustomerSeat = chosenSeats[customer];
        if (seatStatus === 0) {
            let hasCustomer = false;
            for (let i = 0; i < seatMatrix.length; i++) {
                for (let j = 0; j < seatMatrix[i].length; j++) {
                    if (seatMatrix[i][j] === customer) {
                        hasCustomer = true;
                        return;
                    }
                }
            }
        }

        if (seatStatus === 0 && !currentCustomerSeat) {
            updatedMatrix[rowIndex][seatIndex] = customer;
            setChosenSeats({ ...chosenSeats, [customer]: { rowIndex, seatIndex } });
            setCountChosenSeat(countChosenSeat + 1);
        } else if (
            seatStatus === customer &&
            currentCustomerSeat?.rowIndex === rowIndex &&
            currentCustomerSeat?.seatIndex === seatIndex
        ) {
            // Change from selected to available
            updatedMatrix[rowIndex][seatIndex] = 0;
            const updatedChosenSeats = { ...chosenSeats };
            delete updatedChosenSeats[customer];
            setChosenSeats(updatedChosenSeats);
            setCountChosenSeat(countChosenSeat - 1);
        }
        setSeatMatrix(updatedMatrix);
    };

    const checkNavigation = () => {
        if (countChosenSeat === Number(people)) {
            navigation.navigate('BoardingPage', { flight, chosenSeats });
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Text>Traveller</Text>
                <ScrollView horizontal={true}>
                    {Array.from({ length: Number(people) }, (_, i) => i + 1).map((item, index) => (
                        <View key={index} style={{ flexDirection: 'row' }}>
                                                        <TouchableOpacity
                                style={[styles.button, customer === item && styles.selectedButton]}
                                onPress={() => handlePress(item)}
                            >
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>

                <View style={styles.legend}>
                    <View style={styles.legendItem}>
                        <View style={styles.selectedColor}></View>
                        <Text style={styles.legendText}> Selected</Text>
                    </View>
                    <View style={styles.legendItem}>
                        <View style={styles.bookedColor}></View>
                        <Text style={styles.legendText}> Booked</Text>
                    </View>
                    <View style={styles.legendItem}>
                        <View style={styles.availableColor}></View>
                        <Text style={styles.legendText}> Available</Text>
                    </View>
                </View>

                <View style={styles.rowLabels}>
                    <Text style={styles.label}> A</Text>
                    <Text style={styles.label}> B</Text>
                    <Text style={styles.label}> C</Text>
                    <Text style={styles.label}> D</Text>
                </View>
            </View>

            <View style={{ flex: 3 }}>
                <SeatMatrix seatMatrix={seatMatrix} handleSeatSelect={handleSeatSelect} />
            </View>

            <View style={{ flex: 2, backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <Text>Selected Seats</Text>
                    <Text >  {chosenSeats[customer] ? ` ${rowMapping[chosenSeats[customer].rowIndex]}${chosenSeats[customer].seatIndex + 1}`
                        : 'None'}
                    </Text>
                </View>
                
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <Text>Price</Text>
                    <Text>{flight.price}</Text>
                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={styles.buttonContinue}
                        onPress={() => checkNavigation()}
                    >
                        <Text>Continue</Text>
                    </TouchableOpacity>
                </View>
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
        alignItems: 'center',
    },
    selectedButton: {
        backgroundColor: 'coral',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    legend: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: 60,
        paddingRight: 60,
    },
    legendItem: {
        flexDirection: 'row',
    },
    selectedColor: {
        height: 20,
        width: 20,
        backgroundColor: '#FEA36B',
        borderRadius: 5,
    },
    bookedColor: {
        height: 20,
        width: 20,
        backgroundColor: '#089083',
        borderRadius: 5,
    },
    availableColor: {
        height: 20,
        width: 20,
        backgroundColor: '#B7DFDB',
        borderRadius: 5,
    },
    legendText: {
        paddingLeft: 10,
    },
    rowLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: 60,
        paddingRight: 60,
    },
    label: {
        paddingLeft: 10,
    },
    buttonContinue: {
        backgroundColor: 'coral',
        borderRadius: 5,
        height: 60,
        width: 330,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SelectedSeatPage;
