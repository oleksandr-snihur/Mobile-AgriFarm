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

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName='start'>
      <Stack.Screen name='start' options={{headerShown: false}} component={StartScreen} />
      <Stack.Screen name='login' options={{headerTitle: 'Login'}} component={LoginScreen} />
      <Stack.Screen name='signup' options={{headerTitle: 'Signup'}} component={SignupScreen} />
    </Stack.Navigator>
  )
}

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName='home'>
      <Stack.Screen name='home' component={HomeScreen} />
    </Stack.Navigator>
  )
}

const App: React.FC = () => {
  const setNavigationRef = (ref: NavigationContainerRef<ParamListBase> | null) => {
    navigationRef = ref;
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer ref={setNavigationRef}>
        <Stack.Navigator initialRouteName='authStack'>
          <Stack.Screen name='authStack' options={{headerShown: false}} component={AuthStack}/>
          <Stack.Screen name='homeStack' options={{headerShown: false}} component={HomeStack}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
