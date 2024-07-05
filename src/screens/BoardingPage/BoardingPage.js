import React, { useEffect, useState } from 'react';
import { icons } from '../../../constants';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

import { useNavigation } from '@react-navigation/native';


const BoardingPage = ({ route }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
          
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedButton: {
        backgroundColor: 'coral',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    legend: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: 60,
        paddingRight: 60,
    },
    legendItem: {
        flexDirection: 'row',
    },
    selectedColor: {
        height: 20,
        width: 20,
        backgroundColor: '#FEA36B',
        borderRadius: 5,
    },
    bookedColor: {
        height: 20,
        width: 20,
        backgroundColor: '#089083',
        borderRadius: 5,
    },
    availableColor: {
        height: 20,
        width: 20,
        backgroundColor: '#B7DFDB',
        borderRadius: 5,
    },
    legendText: {
        paddingLeft: 10,
    },
    rowLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: 60,
        paddingRight: 60,
    },
    label: {
        paddingLeft: 10,
    },
});

export default BoardingPage;
