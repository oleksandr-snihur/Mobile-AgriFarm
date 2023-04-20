import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainerRef, ParamListBase } from '@react-navigation/native';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';
import Logo from '../components/atoms/Logo';

const splashBg = require('../assets/images/splashBg.png');

type Props = {
  navigation: NavigationContainerRef<ParamListBase>;
}

const SignupScreen: React.FunctionComponent<Props> = ({navigation}: Props) => {
  useEffect(() => {
  }, []);

  return (
        <View style={styles.logoView}>
          <Text>sign up</Text>
        </View>
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

export default SignupScreen;
