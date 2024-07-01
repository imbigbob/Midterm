import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from './MyCartPageStyle';
import { COLORS, SIZES, icons } from "../../constants";

const MyCartPage = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, padding: SIZES.medium }}>

    </View>
  );
}


export default MyCartPage;