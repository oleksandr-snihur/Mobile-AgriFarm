import React from 'react';
import { Image, StyleSheet } from 'react-native';

const imgLogo = require('../../assets/images/logo.png');

type LogoProps = {
  width?: number;
};

const Logo = ({ width = 267 }: LogoProps) => {
  return (
    <Image
      source={imgLogo}
      resizeMode="contain"
      style={[styles.logo, { width: width, height: (width/267.0*232)}]}
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center'
  },
});

export default Logo;
