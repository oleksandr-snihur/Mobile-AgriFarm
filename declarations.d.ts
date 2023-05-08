declare module "*.svg" {
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

declare module 'react-native-switch-selector' {
  import * as React from 'react';

  export interface SwitchSelectorProps {
    initial?: number;
    onPress(value: string): void;
    textColor?: string;
    selectedColor?: string;
    buttonColor?: string;
    borderColor?: string;
    backgroundColor?: string;
    borderRadius?: number;
    hasPadding?: boolean;
    valuePadding?: 
      | number
      | {
          paddingLeft?: number;
          paddingRight?: number;
        };
    height?: number;
    fontSize?: number;
    bold?: boolean;
    fontFamily?: string;
    textStyle?: object;
    selectedTextStyle?: object;
    imageWidth?: number;
    imageHeight?: number;
    options: Array<{
      label: string;
      value: string;
      activeColor?: string;
      imageIcon?: React.ReactElement | string;
      customIcon?: React.ReactElement;
    }>;
    testIDPrefix?: string;
  }

  const SwitchSelector: React.FC<SwitchSelectorProps>;

  export default SwitchSelector;
}
