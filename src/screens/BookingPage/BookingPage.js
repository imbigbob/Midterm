
import { StyleSheet, View, Text } from "react-native";
import { COLORS, SIZES } from "../../constants";

import NavigatePage from "../../components/home/NavigatePage/NavigatePage";
import Card from "../../components/home/Card/Card";
import { useNavigation } from "@react-navigation/native";

const BookingPage = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
<View style={{ flex: 1, backgroundColor: 'white' }}>
  <Text style={{ fontSize: 30, textAlign: 'center', marginTop: '10%' }}>Booking</Text>
</View>
<View style={{ flex: 9 }}>
  <Card />
  </View>


        <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 30, marginBottom: '1%' }}>
          <NavigatePage />
        </View>
   
    </View>
  );
};

export default BookingPage;
