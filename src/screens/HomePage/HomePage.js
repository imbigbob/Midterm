
import { StyleSheet, View, Text } from "react-native";
import { COLORS, SIZES } from "../../../constants";

import styles from "./HomePageStyle";
import NavigatePage from "../../components/home/NavigatePage/NavigatePage";
import { useNavigation } from "@react-navigation/native";
import BookingService from "../../components/home/BookingService/BookingService";
const Homepage = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>

      <View style={{ flex: 1 }}>
        <Text>Explore the beautiful word</Text>
      </View>

      <View style={{ flex: 1, backgroundColor: COLORS.bardilBlack1 }}>

      </View>
      <View style={{ flex: 4 }}>
        <Text>Book your next trip</Text>
        <BookingService />
      </View>
      <View style={{ flex: 2 }}>
        
      </View>
      <View style={{ flex: 1 }}>
        <NavigatePage />
      </View>
    </View>
  );
};

export default Homepage;
