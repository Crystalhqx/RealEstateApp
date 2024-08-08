import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import PropertyDetailsScreen from '../screens/PropertyDetailsScreen';
import ContactScreen from '../screens/ContactScreen';
import RequestScreen from '../screens/RequestScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

export type RootStackParamList = {
  Welcome: undefined;
  Main: undefined;
  PropertyDetails: {
    images: string[];
    price: string;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    address: string;
    zipcode: number;
    description: string;
    keyDetails: {key: string; value: string}[];
  };
  Contact: undefined;
  Request: {selectedDate: string; selectedTime: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PropertyDetails"
        component={PropertyDetailsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={{headerShown: true, title: 'Contact Agent'}}
      />
      <Stack.Screen
        name="Request"
        component={RequestScreen}
        options={{headerShown: true, title: 'Request a tour'}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
