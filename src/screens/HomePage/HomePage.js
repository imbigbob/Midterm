
import {  View, Text } from "react-native";
import { COLORS, SIZES } from "../../../constants";



import BookingService from "../../components/home/BookingService/BookingService";
import SearchComponent from "../../components/home/Search/Search";
const Homepage = () => {
  return (
    <View style={{ flex: 1 }}>

      <View style={{ flex: 1 }}>
        <Text>Explore the beautiful word</Text>
      </View>

      <View style={{ flex: 1 }}>
        <SearchComponent />
      </View>
      <View style={{ flex: 4 }}>
        <Text>Book your next trip</Text>
        <BookingService />
      </View>
      <View style={{ flex: 2 }}>

      </View>

    </View>
  );
};

export default Homepage;
