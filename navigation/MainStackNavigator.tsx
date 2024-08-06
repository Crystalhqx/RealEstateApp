import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import PropertyDetailsScreen from '../screens/PropertyDetailsScreen';
import ContactScreen from '../screens/ContactScreen';
import CommuteScreen from '../screens/CommuteScreen';

export type RootStackParamList = {
  Main: undefined;
  PropertyDetails: {
    image: string;
    address: string;
    price: string;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    description: string;
    keyDetails: string[];
  };
  ContactScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
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
        name="ContactScreen"
        component={ContactScreen}
        options={{headerShown: true, title: 'Contact Agent'}}
      />
      <Stack.Screen
        name="CommuteScreen"
        component={CommuteScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
