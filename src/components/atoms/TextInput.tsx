import * as React from 'react'
import { StyleSheet } from 'react-native'
import { TextInput as PaperTextInput } from 'react-native-paper'

type Props = {
  label: string;
  value?: string;
  icon: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
}


const TextInput: React.FunctionComponent<Props> = ({label, value="", icon, secureTextEntry=false, onChangeText}) => {
  return (
    <PaperTextInput
      mode='outlined'
      label={label}
      value={value}
      secureTextEntry={secureTextEntry}
      right={<PaperTextInput.Icon icon="eye" size={20}/>}
      onChangeText={onChangeText}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#ffffff"
  },
});

export default TextInput;
