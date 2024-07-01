import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from './MyOrderPageStyle';
import { COLORS, SIZES, icons } from "../../constants";
import NavigatePage from '../../components/home/NavigatePage/NavigatePage';
const MyOrderPage = () => {
 
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, padding: SIZES.medium }}>
            <Text style={{ color: '#D8D8D8', marginLeft: '2%', fontSize: 20 }}>
                My Order
            </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={icons.back} dimension="100%" />
            </TouchableOpacity>
            <NavigatePage />
        </View>
    );
}


const PreviewLayout = ({
    values,
    selectedValue,
    setSelectedValue,
}) => (
    <View style={{ padding: 10, flex: 1 }}>

        <View style={styles.row}>
            {values.map(value => (
                <TouchableOpacity
                    key={value.name}
                    onPress={() => setSelectedValue(value.name)}
                    style={[styles.button, selectedValue === value.name && styles.selected]}>
                    <Image source={value.image} style={styles.productImage} />

                </TouchableOpacity>
            ))}
        </View>
    </View>
);
export default MyOrderPage;