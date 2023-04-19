import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer, NavigationContainerRef, ParamListBase } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import StartScreen from './src/screens/StartScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();
let navigationRef: NavigationContainerRef<ParamListBase> | null = null;

const App: React.FC = () => {
  const setNavigationRef = (ref: NavigationContainerRef<ParamListBase> | null) => {
    navigationRef = ref;
  };

  return (
    <NavigationContainer ref={setNavigationRef}>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" options={{headerShown: false}} component={StartScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
