import * as React from 'react';
import { TextInput } from 'react-native-paper';

type Props = {
  label: string;
  value: string;
  icon: string;
  secureTextEntry: boolean;
  onChangeText: (text: string) => void;
}

const OutlinedTextInput: React.FunctionComponent<Props> = ({label, value, icon, secureTextEntry, onChangeText}) => {
  return (
    <TextInput
      mode='outlined'
      label={label}
      value={value}
      secureTextEntry={secureTextEntry}
      right={<TextInput.Icon icon={icon} />}
      onChangeText={onChangeText}
    />
  );
};

OutlinedTextInput.defaultProps = {
  secureTextEntry: false,
};

export default OutlinedTextInput;
