import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainerRef, ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, ImageBackground, StyleSheet } from 'react-native';
import Logo from '../components/atoms/Logo';

const splashBg = require('../assets/images/splashBg.png');

type Props = {
  navigation: NavigationContainerRef<ParamListBase>;
}

const StartScreen: React.FunctionComponent<Props> = ({navigation}: Props) => {
  useEffect(() => {
    // Hide the splash screen after 2.5 seconds
    setTimeout(() => {
      try {
        SplashScreen.hide();
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        })
      } catch (e) {
        console.warn(e);
      }
    }, 2500);
  }, []);;

  return (
    <ImageBackground
      style={styles.container}
      source={splashBg}>
        <View style={styles.logoView}>
          <Logo />
        </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoView: {
    top: "-12%"
  },
});

export default StartScreen;
