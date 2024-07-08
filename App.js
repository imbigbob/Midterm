import * as React from 'react';
import { SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './src/navigators/TabNavigator';
import TransportPage from "./src/screens/TransportPage/TransportPage";
import FlightPage from "./src/screens/FlightPage/FlightPage";
import SelectedSeatPage from "./src/screens/SelectedSeatPage/SelectedSeatPage";
import BoardingPage from "./src/screens/BoardingPage/BoardingPage";
import SearchResultsScreen from './src/screens/SearchPage/SearchPage'
import FilterPage from './src/screens/FilterPage/FilterPage';
import PersonalInformation from "./src/screens/PersonalInformation/PersonalInformation";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TabNavigator">
          <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="Transport" component={TransportPage} options={{
            title: 'Transport Booking', headerShown: true, headerTitleAlign: 'center',
            TextAlign: 'center'
          }}
          />
          <Stack.Screen name="FlightPage" component={FlightPage}
          options={ {title :'Flight Booking', headerShown: true, headerTitleAlign: 'center'}} />
          <Stack.Screen name="SelectedSeatPage" component={SelectedSeatPage}
            options={{
              title: 'Selected Seats', headerShown: true, headerTitleAlign: 'center'
            }} />
          <Stack.Screen name="BoardingPage" component={BoardingPage}
          options={{title:'Boarding',headerShown:true,headerTitleAlign:'center'}} />
          <Stack.Screen name="SearchResults" component={SearchResultsScreen}
            options={{
              title: 'Search Results', headerShown: true, headerTitleAlign: 'center'
            }} />
          <Stack.Screen name="FilterPage" component={FilterPage}
            options={{ title: 'Filters', headerShown: true, headerTitleAlign: 'center' }}
          />
          <Stack.Screen name="PersonalInformation" component={PersonalInformation}
            options={{ title: 'Personal Information', headerShown: true, headerTitleAlign: 'center' }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
