import React from 'react';
import { Image, StyleSheet } from 'react-native';

const imgLogo = require('../../assets/images/logo.png');

type LogoProps = {
  width?: number;
};

const Logo = ({ width = 166 }: LogoProps) => {
  return (
    <Image
      source={imgLogo}
      resizeMode="contain"
      style={[styles.logo, { width: width, height: (width/166.0*103)}]}
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    marginBottom: 16,
  },
});

export default Logo;
