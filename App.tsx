import 'react-native-gesture-handler';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Button, Provider as PaperProvider } from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer, NavigationContainerRef, ParamListBase } from '@react-navigation/native';

import {theme} from './src/theme/theme';
import tw from './src/helpers/tailwind';
import AppBar from './src/components/molecules/AppBar';
import { StartScreen, HomeScreen, LoginScreen, SignupScreen } from './src/screens';

import SettingsSVG from './src/assets/icons/icon_settings.svg';
import NotificationSVG from './src/assets/icons/icon_notification.svg';

const Stack = createStackNavigator();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName='Start'
    >
      <Stack.Screen name='Start' options={{headerShown: false}} component={StartScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Signup'
        options={{
          headerBackTitleVisible: false,
          headerLeft: () => null
        }} component={SignupScreen}
      />
    </Stack.Navigator>
  )
}


const HomeStack: React.FC = () => {

  return (
    <Stack.Navigator 
      initialRouteName='Home'
      screenOptions={{
        header: ({navigation, route}) => {
          return (
            <AppBar navigation={navigation} route={route} style={tw`bg-screenBackground`} back={false} menu={true} title={false}>
              <TouchableOpacity
                onPress={()=>{}}
                activeOpacity={0.7}
                style={tw`mr-3`}
              >
                <SettingsSVG width={30} height={30} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=>{}}
                activeOpacity={0.7}
                style={tw`mr-3`}
              >
                <NotificationSVG width={30} height={30} />
              </TouchableOpacity>
            </AppBar>
          )
        },
      }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  )
}

let navigationRef: NavigationContainerRef<ParamListBase> | null = null;


/**
 * component definition
 * @returns ReactNode
 */
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
