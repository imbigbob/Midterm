// import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
// import icoMoonConfig from "../../../selection.json"
// export default createIconSetFromIcoMoon(icoMoonConfig);
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image } from 'react-native';



const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let label;

          if (route.name === 'Home') {
            iconName = focused
              ? require('./assets/home-focused.png')
              : require('./assets/home.png');
            label = focused ? 'Home' : '';
          } else if (route.name === 'Settings') {
            iconName = focused
              ? require('./assets/settings-focused.png')
              : require('./assets/settings.png');
            label = focused ? 'Settings' : '';
          }

          // You can return any component that you like here!
          return (
            <View style={{ alignItems: 'center' }}>
              <Image source={iconName} style={{ width: size, height: size, tintColor: color }} />
              <Text style={{ color: color }}>{label}</Text>
            </View>
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
