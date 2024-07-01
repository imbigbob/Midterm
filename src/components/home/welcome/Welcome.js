import React from "react";
import { View, Text,TouchableOpacity } from "react-native";
import styles from "../welcome/welcome.style";
// import {icons,SIZES,FONT,SHADOWS} from "../../../constants"
// import { useState } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
return (
    <View style={[styles.container,{marginLeft:'2%'}]}>
        <Text style={styles.welcomeMessage}>Hello  </Text>
        <Text style={styles.userName}>Thanh Hai</Text>
    </View>
);
};

export default Welcome;