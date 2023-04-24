import React, {ReactNode} from 'react';
import { View, ViewStyle } from 'react-native';
import { Text } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

import tw from '../../helpers/tailwind';

type Props = {
  children: ReactNode;
  text: string;
  style?: ViewStyle;
  blRound: boolean;
  onPress: () => void;
}

/**
 * component definition
 * @returns ReactNode
 */
const HomeCategory: React.FunctionComponent<Props> = ({children, text, style={}, blRound, onPress,}) => {
  const borderStyle = blRound ? {
    borderBottomLeftRadius: 40,
    borderTopRightRadius: 40
  } : {
    borderBottomRightRadius: 40,
    borderTopLeftRadius: 40
  };

  const texts: string[] = text.split(" ");
  const strings: string[] = ["Financial Service", "AgriCultural Support", "Customer Support"];

  return (
    <View style={tw.style(`items-center justify-center bg-white mr-2 w-[120px] h-[110px] shadow-[#26BC80FF] shadow-lg`, borderStyle, style)}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={tw`items-center justify-center`}
      >
        {children}
        {strings.includes(text) ?
          <>
            <Text style={tw`font-RalewaySemiBold`}>{texts[0]}</Text>
            <Text style={tw`font-RalewaySemiBold`}>{texts[1]}</Text>
          </> :
          <Text style={tw`font-RalewaySemiBold`}>{text}</Text>
        }
      </TouchableOpacity>
    </View>
  );
};

export default HomeCategory;
