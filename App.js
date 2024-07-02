import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from '././constants';

import Homepage from './src/screens/HomePage/HomePage';
import BookingPage from "./src/screens/BookingPage/BookingPage";
import TransportPage from "./src/screens/TransportPage/TransportPage";
import FlightPage from "./src/screens/FlightPage/FlightPage";

import { SafeAreaView, StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite, marginTop: '2%' }}>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Homepage"
              component={Homepage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BookingPage"
              component={BookingPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
            name="Transport Booking"
            component={TransportPage}
            options={{ title: 'Transport Booking', headerShown:true, headerTitleAlign: 'center',
              TextAlign: 'center'  }}
          />
          <Stack.Screen
            name="FlightPage"
            component={FlightPage}
            options={{ title: 'Flight Booking', headerShown:true, headerTitleAlign: 'center',
              TextAlign: 'center'  }}
          />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
