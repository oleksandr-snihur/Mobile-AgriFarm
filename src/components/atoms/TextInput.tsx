import React, {useState} from 'react';
import { View } from 'react-native';
import { TextInput as PaperTextInput, Text, TextInputProps } from 'react-native-paper';

import tw from '../../helpers/tailwind'

interface Props extends TextInputProps {
  errorText?: string;
  icon: string;
}


/**
 * component definition
 * @returns ReactNode
 */
const TextInput: React.FunctionComponent<Props> = ({errorText="", secureTextEntry=false, icon, ...props}) => {
  const [showPwd, setShowPwd] = useState(!secureTextEntry);

  return (
    <View style={tw`w-full my-1.5`}>
      <PaperTextInput
        mode='outlined'
        underlineColor="transparent"
        secureTextEntry={!showPwd}
        right={
          <PaperTextInput.Icon disabled={!secureTextEntry} style={tw`mt-3`}
            icon={secureTextEntry ? (showPwd ? "eye-off-outline" : "eye-outline") : icon} size={22}
            onPress={() => {
              setShowPwd(prev => !prev)
            }}
          />
        }
        style={tw`w-full h-10 rounded-md border-l-grey`}
        {...props}
      />
      {errorText ? <Text style={tw`text-sm text-red-700`}>{errorText}</Text> : null}
    </View>
  );
};

export default TextInput;
