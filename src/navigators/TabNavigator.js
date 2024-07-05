import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { icons } from '../../constants'; // Ensure icons paths are correctly defined

import Homepage from '../screens/HomePage/HomePage';
import BookingPage from "../screens/BookingPage/BookingPage";
import ProfilePage from "../screens/ProfilePage";
import NotificationPage from '../screens/Notification/Notification';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress, focused }) => (
    <TouchableOpacity
        style={[
            styles.tabButton,
            focused ? styles.focusedTab : styles.unfocusedTab,
            { borderRadius: focused ? 20 : 0, }
        ]}
        onPress={onPress}
    >
        {children}
    </TouchableOpacity>
);

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({

                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let label;

                    if (route.name === 'Home') {
                        iconName = focused ? icons.Tab : icons.Tab; // Adjust if icons are different for focused state
                        label = focused ? 'Home' : '';
                    } else if (route.name === 'Booking') {
                        iconName = focused ? icons.Booking : icons.Booking; // Adjust if icons are different for focused state
                        label = focused ? 'Booking' : '';
                    } else if (route.name === 'Notification') {
                        iconName = focused ? icons.Bell : icons.Bell; // Adjust if icons are different for focused state
                        label = focused ? 'Notification' : '';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? icons.user : icons.user; // Adjust if icons are different for focused state
                        label = focused ? 'Profile' : '';
                    }

                    // You can return any component that you like here!
                    return (
                        <View style={[
                            { alignItems: 'center' },
                            { flexDirection: 'row' },
                            {
                                borderRadius: 20, paddingLeft: 15, paddingRight: 15,
                                paddingTop: 10, paddingBottom: 10
                            },
                            focused ? { backgroundColor: '#FFDDA2' } : {}
                        ]}>
                            <Image source={iconName} style={{ width: size, height: size, tintColor: color }} />
                            <Text style={{ color: color }}>{label}</Text>
                        </View>
                    );
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarLabel: () => null, // Hide the default label
                tabBarStyle: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: 'white', // Adjust as needed
                    height: 60, // Adjust as needed
                },
                tabBarHideOnKeyboard: true,
                tabBarButton: (props) => <CustomTabBarButton {...props} />
            })}
        >
            <Tab.Screen name="Home" component={Homepage} options={{ headerShown: false }} />
            <Tab.Screen name="Booking" component={BookingPage} options={{ headerShown: false }} />
            <Tab.Screen name="Notification" component={NotificationPage} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={ProfilePage} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 2,
    },
    focusedTab: {
        backgroundColor: '#FFDDA2',
        borderRadius: 20,
    },
    unfocusedTab: {
        borderColor: 'transparent',
    },
});

export default TabNavigator;
