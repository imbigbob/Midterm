import firestore from '@react-native-firebase/firestore';

// Function to fetch flight data from Firestore
const fetchFlightsFromFirestore = async () => {
    try {
        const snapshot = await firestore().collection('Flight').get();
        const flights = [];

        snapshot.forEach(doc => {
            let flight = doc.data();

            // // Group seat rows back into a seatMatrix
            flight.seatMatrix = [
                flight.seatRow1,
                flight.seatRow2,
                flight.seatRow3,
                flight.seatRow4
            ];

            // Remove the individual seat rows
            delete flight.seatRow1;
            delete flight.seatRow2;
            delete flight.seatRow3;
            delete flight.seatRow4;

            flights.push(flight);
        });

       //console.log(flights);
        return flights;
    } catch (error) {
        console.error('Error reading flights data from Firestore: ', error);
    }
};

export default fetchFlightsFromFirestore;
