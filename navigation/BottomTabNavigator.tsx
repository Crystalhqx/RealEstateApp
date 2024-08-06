import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SearchScreen from '../screens/SearchScreen';
import FeedScreen from '../screens/FeedScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MyHomeScreen from '../screens/MyHomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Search"
    screenOptions={{
      tabBarActiveTintColor: 'red',
    }}>
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="home-search-outline"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Feed"
      component={FeedScreen}
      options={{
        tabBarLabel: 'Feed',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="newspaper-variant"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        tabBarLabel: 'Favorites',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="heart-outline"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="MyHome"
      component={MyHomeScreen}
      options={{
        tabBarLabel: 'My Home',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="home-variant-outline"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomTabNavigator;
