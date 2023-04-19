import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const metrics = {
  smallMargin: 5,
  baseMargin: 10,
  doubleBaseMargin: 20,

  smallPadding: 5,
  basePadding: 10,
  doubleBasePadding: 20,

  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,

  borderRadius: 5,
  doubleBorderRadius: 10
};
