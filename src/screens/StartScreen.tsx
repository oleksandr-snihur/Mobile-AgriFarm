import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainerRef, ParamListBase } from '@react-navigation/native';
import { View, ImageBackground, StyleSheet } from 'react-native';

import Logo from '../components/atoms/Logo';
const splashImg = require('../assets/images/splash.png');

type Props = {
  navigation: NavigationContainerRef<ParamListBase>;
}


/**
 * component definition
 * @returns ReactNode
 */
const StartScreen: React.FunctionComponent<Props> = ({navigation}: Props) => {
  useEffect(() => {
    setTimeout(() => {
      try {
        SplashScreen.hide();
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        })
      } catch (e) {
        console.warn(e);
      }
    }, 2500);
  }, []);;

  return (
    <ImageBackground style={styles.container} source={splashImg}>
        <View style={styles.logoView}>
          <Logo width={220}/>
        </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logoView: {
    top: "-12%"
  },
});

export default StartScreen;
