import 'react-native-gesture-handler';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import {StackNavigationOptions, createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer, NavigationContainerRef, NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

import { theme } from './src/theme/theme';

import tw from './src/helpers/tailwind';
import AppBar from './src/components/molecules/HomeAppBar';

import {
  StartScreen,
  LoginScreen,
  SignupScreen,
  HomeScreen,

  MyFarmScreen,
  ShopScreen,
  FinancialServiceScreen,
  TrainingScreen,
  AgriCulturalSupportScreen,
  CustomerSupportScreen,

  CropLossScreen,
  InsurancePremiumCalculatorScreen,
  ApplicationStatusScreen,
  HelpDeskScreen,
  FarmerFaqScreen,

  FarmDetailsScreen,
} from './src/screens';

import SettingsSVG from './src/assets/icons/icon_settings.svg';
import NotificationSVG from './src/assets/icons/icon_notification.svg';
import BackBtnSVG from './src/assets/icons/btn_back.svg';
import SearchBtnSVG from './src/assets/icons/search.svg';

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
                <SettingsSVG width={25} height={25} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=>{}}
                activeOpacity={0.7}
                style={tw`mr-3`}
              >
                <NotificationSVG width={25} height={25} />
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

const headerOptionsCreator  = (navigation: NavigationProp<Record<string, unknown>>, right:string = ""): StackNavigationOptions => ({
  headerTitleAlign: 'center',
  headerStyle: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      activeOpacity={0.7}
      style={tw`ml-4`}
    >
      <BackBtnSVG width={25} height={25} />
    </TouchableOpacity>
  ),
  headerRight: () => right==="" ? null : (
      (right==="search" ?
        <TouchableOpacity
          onPress={() =>{}}
          activeOpacity={0.7}
          style={tw`mr-4`}
        >
          <SearchBtnSVG width={23} height={23} />
        </TouchableOpacity>
        :
        <TouchableOpacity
          onPress={() =>{}}
          activeOpacity={0.7}
          style={tw`mr-4`}
        >
          <NotificationSVG width={23} height={23} />
        </TouchableOpacity>
      )
  )
});

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator 
      initialRouteName='My Farm'
      screenOptions={{
        cardStyle: { backgroundColor: '#F1FDF8EE' }
      }}>

      <Stack.Screen name='My Farm' component={MyFarmScreen}
        options={({ navigation }) => headerOptionsCreator(navigation, "notification")}
      />
      <Stack.Screen name='Shop' component={ShopScreen}
        options={({ navigation }) => headerOptionsCreator(navigation, "search")}
      />
      <Stack.Screen name='Financial Services' component={FinancialServiceScreen}
        options={({ navigation }) => headerOptionsCreator(navigation)}
      />
      <Stack.Screen name='Training' component={TrainingScreen}
        options={({ navigation }) => headerOptionsCreator(navigation, "search")}
      />
      <Stack.Screen name='Agri Cultural Support' component={AgriCulturalSupportScreen}
        options={({ navigation }) => headerOptionsCreator(navigation)}
      />
      <Stack.Screen name='Customer Support' component={CustomerSupportScreen}
        options={({ navigation }) => headerOptionsCreator(navigation)}
      />

      <Stack.Screen name='Crop Loss' component={CropLossScreen}
        options={({ navigation }) => headerOptionsCreator(navigation)}
      />
      <Stack.Screen name='Insurance Premium Calculator' component={InsurancePremiumCalculatorScreen}
        options={({ navigation }) => headerOptionsCreator(navigation)}
      />
      <Stack.Screen name='Application Status' component={ApplicationStatusScreen}
        options={({ navigation }) => headerOptionsCreator(navigation)}
      />
      <Stack.Screen name='Help Desk' component={HelpDeskScreen}
        options={({ navigation }) => headerOptionsCreator(navigation)}
      />
      <Stack.Screen name='Farmer FAQ' component={FarmerFaqScreen}
        options={({ navigation }) => headerOptionsCreator(navigation)}
      />
      <Stack.Screen name='Farm Details' component={FarmDetailsScreen}
        options={({ navigation }) => headerOptionsCreator(navigation)}
      />
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
          <Stack.Screen name='appStack' options={{headerShown: false}} component={AppStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
