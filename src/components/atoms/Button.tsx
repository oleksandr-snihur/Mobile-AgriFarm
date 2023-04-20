import React from 'react'
import { StyleProp, ViewStyle, StyleSheet } from 'react-native'
import { Button as PaperButton, ButtonProps } from 'react-native-paper'
import { theme } from '../../theme/theme'


interface Props extends ButtonProps {
  mode?: 'text' | 'outlined' | 'contained' | "elevated" | "contained-tonal";
  style?: StyleProp<ViewStyle>;
}

const Button: React.FC<Props> = ({ mode="contained", style, ...props}) => {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && { backgroundColor: theme.colors.surface },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 6,
    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
})

export default Button;