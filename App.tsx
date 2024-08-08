import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MainStackNavigator from './src/navigators/MainStackNavigator';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
