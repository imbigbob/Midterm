import * as React from "react";
import { Image, View, TextInput, Text, Touchable, TouchableOpacity } from "react-native"; // Import StyleSheet
import { COLORS, icons, SIZES, FONT, SHADOWS } from "../../../constants";

import { useNavigation } from '@react-navigation/native';


import NumberPicker from "../../components/home/Order/Order";

const TransportPage = () => {

  const navigation = useNavigation(); 
const [from, setFrom] = React.useState('');
const [to, setTo] = React.useState('');
const [date, setDate] = React.useState('');
const [People, setPeople] = React.useState(0);
const [Baby, setBaby] = React.useState(0);
const [Pet, setPet] = React.useState(0);
const [Luggage, setLuggage] = React.useState(0);

  return (
    <View style={{ flex: 1 }}>
      
      <View style={{ flex: 1,flexDirection:'row'}}>


      <NumberPicker
          values="People" // Pass the string for the icon key
          selectedNumber={People}
          setSelectedNumber={setPeople}
        />
        <NumberPicker
          values="Baby" // Pass the string for the icon key
          selectedNumber={Baby}
          setSelectedNumber={setBaby}
        />
        <NumberPicker
          values="Pet" // Pass the string for the icon key
          selectedNumber={Pet}
          setSelectedNumber={setPet}
        />
        <NumberPicker
          values="Luggage" // Pass the string for the icon key
          selectedNumber={Luggage}
          setSelectedNumber={setLuggage}
        />
    </View>
    </View >
  );
};
export default TransportPage;


