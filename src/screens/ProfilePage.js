import * as React from "react";
import { Image, View, TextInput, Text, Touchable, TouchableOpacity } from "react-native"; // Import StyleSheet
import { COLORS, icons, SIZES, FONT, SHADOWS } from "../constants";

import { useNavigation } from '@react-navigation/native';
const ProfilePage = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const navigation = useNavigation(); // Added useNavigation hook
  return (
    <View style={{ flex: 1, padding: SIZES.medium }}>
      <View style={{ flex: 1, padding: SIZES.medium }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icons.back} dimension="100%" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 9, padding: SIZES.medium }}>
        <Text>Profile</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          placeholder="Username"
        />
        <Text >Address</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          placeholder="Address"
        />
      </View>
    </View>
  );
};
export default ProfilePage;


