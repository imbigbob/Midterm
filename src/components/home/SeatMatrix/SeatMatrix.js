import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const SeatMatrix = ({ seatMatrix,customer }) => {

    const [selectedSeat, setSelectedSeat] = React.useState(null);

    const handleSeatSelect = (rowIndex, seatIndex) => {
        const seatStatus = seatMatrix[rowIndex][seatIndex];

        if (seatStatus === 1) {
            return; // Do nothing if the seat is booked
        } else if (seatStatus === 0&& !selectedSeat) {
            seatMatrix[rowIndex][seatIndex] = 2; // Change from available to selected
            setSelectedSeat({ rowIndex, seatIndex });
        } else if (seatStatus === 2) {
            seatMatrix[rowIndex][seatIndex] = 0; // Change from selected to available
            setSelectedSeat(null);
        }
    }

    return (
        <View style={styles.container}>
            {seatMatrix.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {row.map((seat, seatIndex) => (
                        <TouchableOpacity
                            key={seatIndex}
                            style={[
                                seat === 0 && styles.buttonAvailable,
                                seat === 1 && styles.buttonBooked,
                                seat === 2 && styles.buttonSelected,
                            ]}
                            onPress={() => handleSeatSelect(rowIndex, seatIndex)}
                        />
                    ))}
                </View>
            ))}
        </View>
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
        flexWrap: 'wrap',
    },
    buttonBooked: {
        backgroundColor: '#089083',
        borderRadius: 5,
        height: 48,
        width: 48,
    },
    buttonSelected: {
        backgroundColor: '#FEA36B',
        borderRadius: 5,
        height: 48,
        width: 48,
    },
    buttonAvailable: {
        backgroundColor: '#B7DFDB',
        borderRadius: 5,
        height: 48,
        width: 48,
    },
});

export default SeatMatrix;
