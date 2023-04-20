import 'react-native-gesture-handler';
import React from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
  ParamListBase,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import {theme} from './src/theme/theme'

import {
  StartScreen,
  HomeScreen,
  LoginScreen,
  SignupScreen,
} from './src/screens';

const Stack = createStackNavigator();
let navigationRef: NavigationContainerRef<ParamListBase> | null = null;

const App: React.FC = () => {
  const setNavigationRef = (ref: NavigationContainerRef<ParamListBase> | null) => {
    navigationRef = ref;
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer ref={setNavigationRef}>
        <Stack.Navigator initialRouteName="start">
          <Stack.Screen name="start" options={{headerShown: false}} component={StartScreen} />
          <Stack.Screen name="login" options={{headerTitle: 'Login'}} component={LoginScreen} />
          <Stack.Screen name="signup" options={{headerTitle: 'Signup'}} component={SignupScreen} />
          <Stack.Screen name="home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
