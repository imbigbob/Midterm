import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text,ScrollView } from 'react-native';

const SeatMatrix = ({ seatMatrix, handleSeatSelect }) => {
    return (
        <ScrollView>
        <View style={styles.container}>
            {seatMatrix.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {row.map((seat, seatIndex) => (
                        <TouchableOpacity
                            key={seatIndex}
                            style={[
                                typeof seat === 'number' && seat === 0 && styles.buttonAvailable,
                                typeof seat === 'number' && seat === 0.5 && styles.buttonBooked,
                                typeof seat === 'number' && seat >0.5 && styles.buttonSelected,
                            ]}
                            onPress={() => handleSeatSelect(rowIndex, seatIndex)}
                        >
                            {typeof seat === 'number' && seat > 0.5 && (
                                <Text style={styles.seatText}>{seat}</Text>
                            )}
                        </TouchableOpacity>
                       
                    ))}
           
                </View>
            ))}
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: 60,
        paddingRight: 60,
    },
    row: {
        flexDirection: 'column',
   
    },
    buttonBooked: {
        backgroundColor: '#089083',
        borderRadius: 5,
        height: 48,
        width: 48,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonSelected: {
        backgroundColor: '#FEA36B',
        borderRadius: 5,
        height: 48,
        width: 48,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonAvailable: {
        backgroundColor: '#B7DFDB',
        borderRadius: 5,
        height: 48,
        width: 48,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    seatText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default SeatMatrix;
