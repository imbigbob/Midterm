const flights = [
    {
        id: 1,
        departure: "New York",
        destination: "Los Angeles",
        date: "2024-07-05",
        returnDate: "2024-07-08",
        departureTime: "08:00",
        landingTime: "11:00",
        price: 300,
        seatMatrix: [
            [1, 0, 1, 1,  1, 1, 1, 1],
            [1, 1, 0, 0,  0, 1, 1, 1],
            [1, 1, 1, 1,  1, 1, 1, 0],
            [0, 1, 1, 1,  1, 1, 0, 1]
        ],
        people: 2,
        availableSeats: 7
    },
    {
        id: 2,
        departure: "New York",
        destination: "Los Angeles",
        date: "2024-07-06",
        returnDate: "2024-07-09",
        departureTime: "10:30",
        landingTime: "13:30",
        price: 250,
        seatMatrix: [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 1]
        ],
        people: 1,
        availableSeats: 7
    },
    {
        id: 3,
        departure: "New York",
        destination: "Los Angeles",
        date: "2024-07-07",
        returnDate: "2024-07-10",
        departureTime: "09:45",
        landingTime: "11:45",
        price: 200,
        seatMatrix: [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1]
        ],
        people: 2,
        availableSeats: 8
    },
    {
        id: 4,
        departure: "New York",
        destination: "Los Angeles",
        date: "2024-07-08",
        returnDate: "2024-07-11",
        departureTime: "14:00",
        landingTime: "23:00",
        price: 600,
        seatMatrix: [
            [0, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 0, 1, 1, 1, 1, 1],
            [0, 0, 0, 1, 1, 1, 1, 1]
        ],
        people: 1,
        availableSeats: 8
    },
    {
        id: 5,
        departure: "New York",
        destination: "Los Angeles",
        date: "2024-07-08",
        returnDate: "2024-07-11",
        departureTime: "07:30",
        landingTime: "10:30",
        price: 180,
        seatMatrix: [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 1]
        ],
        people: 2,
        availableSeats: 7
    },
    {
        id: 6,
        departure: "New York",
        destination: "Los Angeles",
        date: "2024-07-08",
        returnDate: "2024-07-11",
        departureTime: "11:15",
        landingTime: "13:15",
        price: 220,
        seatMatrix: [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1]
        ],
        people: 1,
        availableSeats: 8
    },
    {
        id: 7,
        departure: "New York",
        destination: "Los Angeles",
        date: "2024-07-08",
        returnDate: "2024-07-11",
        departureTime: "18:00",
        landingTime: "22:00",
        price: 400,
        seatMatrix: [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1]
        ],
        people: 2,
        availableSeats: 8
    },
    {
        id: 8,
        departure: "New York",
        destination: "Los Angeles",
        date: "2024-07-7",
        returnDate: "2024-07-15",
        departureTime: "09:30",
        landingTime: "15:30",
        price: 500,
        seatMatrix: [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1]
        ],
        people: 1,
        availableSeats: 8
    },
    {
        id: 9,
        departure: "New York",
        destination: "Los Angeles",
        date: "2024-07-6",
        returnDate: "2024-07-16",
        departureTime: "13:00",
        landingTime: "18:00",
        price: 350,
        seatMatrix: [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1]
        ],
        people: 2,
        availableSeats: 8
    },
    {
        id: 10,
        departure: "New York",
        destination: "Los Angeles",
        date: "2024-07-5",
        returnDate: "2024-07-17",
        departureTime: "08:45",
        landingTime: "15:45",
        price: 450,
        seatMatrix: [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1]
        ],
        people: 1,
        availableSeats: 8
    },
    {
        id: 11,
        departure: "New York",
        destination: "Los Angeles",
        date: "2024-07-5",
        returnDate: "2024-07-18",
        departureTime: "12:30",
        landingTime: "14:30",
        price: 180,
        seatMatrix: [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1]
        ],
        people: 2,
        availableSeats: 8
    },
    {
        id: 12,
        departure: "New York",
        destination: "Los Angeles",
        date: "2024-07-6",
        returnDate: "2024-07-9",
        departureTime: "09:00",
        landingTime: "12:00",
        price: 300,
        seatMatrix: [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1]
        ],
        people: 1,
        availableSeats: 8
    },
    {
        id: 13,
        departure: "New York",
        destination: "Los Angeles",
        date: "2024-07-7",
        returnDate: "2024-07-10",
        departureTime: "14:15",
        landingTime: "17:15",
        price: 200,
        seatMatrix: [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1]
        ],
        people: 2,
        availableSeats: 8
    },
    {
        id: 14,
        departure: "New York",
        destination: "Los Angeles",
        date: "2024-07-8",
        returnDate: "2024-07-11",
        departureTime: "11:00",
        landingTime: "14:00",
        price: 250,
        seatMatrix: [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1]
        ],
        people: 1,
        availableSeats: 8
    },
    {
        id: 15,
        departure: "New York",
        destination: "Los Angeles",
        date: "2024-07-9",
        returnDate: "2024-07-11",
        departureTime: "07:00",
        landingTime: "11:00",
        price: 180,
        seatMatrix: [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1]
        ],
        people: 2,
        availableSeats: 8
    },
    {
        id: 16,
        departure: "New York",
        destination: "Los Angeles",
        date: "2024-07-15",
        returnDate: "2024-07-22",
        price: 300,
        seatMatrix: [
            [1, 0, 1, 1, 1, 1, 1, 1],
            [1, 1, 0, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 1]
        ],
        people: 2,
        availableSeats: 7
    },
    {
        id: 17,
        departure: "Chicago",
        destination: "Miami",
        date: "2024-08-10",
        returnDate: "2024-08-17",
        price: 250,
        seatMatrix: [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 1]
        ],
        people: 2,
        availableSeats: 7
    },
    {
        id: 18,
        departure: "'Dallas'",
        destination: "Chicago",
        date: "2024-09-05",
        returnDate: "2024-09-12",
        price: 200,
        seatMatrix: [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 1]
        ],
        people: 2,
        availableSeats: 7
    },
    {
        id: 19,
        departure: "Boston",
        destination: "Las Vegas",
        date: "2024-10-15",
        returnDate: "2024-10-22",
        price: 180,
        seatMatrix: [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 1]
        ],
        people: 2,
        availableSeats: 7
    },
    {
        id: 20,
        departure: "Boston'",
        destination: "Las Vegas",
        date: "2024-11-10",
        returnDate: "2024-11-17",
        price: 400,
        seatMatrix: [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 1]
        ],
        people: 2,
        availableSeats: 7
    },
    {
        id: 21,
        departure: "Chicago",
        destination: "Los Angeles",
        date: "2024-12-01",
        returnDate: "2024-12-08",
        price: 500,
        seatMatrix: [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 1]
        ],
        people: 2,
        availableSeats: 7
    },
    {
        id: 22,
        departure: "Chicago",
        destination: "Los Angeles",
        date: "2025-01-10",
        returnDate: "2025-01-17",
        price: 280,
        seatMatrix: [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 1]
        ],
        people: 2,
        availableSeats: 7
    },
    {
        id: 23,
        departure: "Los Angeles",
        destination: "Chicago",
        date: "2025-02-20",
        returnDate: "2025-02-27",
        price: 350,
        seatMatrix: [
            [1, 0, 1, 1, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 1],
            [1, 1, 1, 1, 0, 1, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 1]
        ],
        people: 2,
        availableSeats: 7
    },
    // Add more entries as needed
];
flights.forEach(flight => {
    // Reverse each row in the seatMatrix
    flight.seatMatrix.forEach(row => {
        row.reverse();
    });

    // Reverse the entire seatMatrix array if needed
    // flight.seatMatrix.reverse();

    let availableSeats = flight.availableSeats;
    let totalSeats = flight.seatMatrix.flat().length;
    let newSeatMatrix = [];

    // Flatten seatMatrix to count current seats
    let flattenedSeatMatrix = flight.seatMatrix.flat();

    // Replace 1 with 0.5
    flattenedSeatMatrix = flattenedSeatMatrix.map(seat => seat === 1 ? 0.5 : seat);

    // Calculate the number of 0s needed to match availableSeats
    let zerosToAdd = availableSeats - flattenedSeatMatrix.filter(seat => seat === 0).length;

    if (zerosToAdd > 0) {
        for (let i = 0; i < flattenedSeatMatrix.length; i++) {
            if (flattenedSeatMatrix[i] === 0.5 && zerosToAdd > 0) {
                flattenedSeatMatrix[i] = 0;
                zerosToAdd--;
            }
        }
    } else if (zerosToAdd < 0) {
        for (let i = 0; i < flattenedSeatMatrix.length; i++) {
            if (flattenedSeatMatrix[i] === 0 && zerosToAdd < 0) {
                flattenedSeatMatrix[i] = 0.5;
                zerosToAdd++;
            }
        }
    }

    // Convert the flattened matrix back to the original 2D format
    for (let i = 0; i < flight.seatMatrix.length; i++) {
        newSeatMatrix.push(flattenedSeatMatrix.slice(i * flight.seatMatrix[0].length, (i + 1) * flight.seatMatrix[0].length));
    }

    flight.seatMatrix = newSeatMatrix;
    flight.availableSeats = availableSeats - zerosToAdd; // Update availableSeats based on adjustments
});
console.log(flights);
export default flights;