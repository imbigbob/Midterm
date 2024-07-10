
import {  View, Text } from "react-native";




import BookingService from "../../components/home/BookingService/BookingService";
import SearchComponent from "../../components/home/Search/Search";
const Homepage = () => {
  return (
    <View style={{ flex: 1 }}>

      <View style={{ flex: 1 }}>
        <Text style={{fontSize:18,paddingTop:30,fontWeight:'700',paddingLeft:20}}>Explore the beautiful word</Text>
      </View>

      <View style={{ flex: 1 }}>
        <SearchComponent />
      </View>
      <View style={{ flex: 4 }}>
        <Text style={{fontSize:16,fontWeight:'400',paddingLeft:20}}>Booking Services</Text>
        <BookingService />
      </View>
      <View style={{ flex: 2 }}>

      </View>

    </View>
  );
};

export default Homepage;
