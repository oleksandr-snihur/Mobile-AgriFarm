import React, {ReactNode} from 'react';
import { View, ViewStyle } from 'react-native';
import { Text } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {theme} from '../../theme/theme';
import tw from '../../helpers/tailwind';

type Props = {
  children: ReactNode;
  text: string;
  active: boolean;
  style?: ViewStyle;
  onPress: () => void;
}

/**
 * component definition
 * @returns ReactNode
 */
const RegisterType: React.FunctionComponent<Props> = ({children, text, active, onPress, style={}}) => {

  return (
    <View style={tw.style(`flex-row items-center`, style)}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={tw.style(`border-2 rounded-md mr-2`, active?{borderColor: theme.colors.primary}:{borderColor: theme.colors.greyLight})}
      >
        {children}
      </TouchableOpacity>
      <Text style={[active?{color: theme.colors.primary}:{color: theme.colors.black}, {fontSize:17}]}>{text}</Text>
    </View>
  );
};

export default RegisterType;
