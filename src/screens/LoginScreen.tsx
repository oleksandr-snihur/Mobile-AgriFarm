import React, { useState } from 'react';
import { NavigationContainerRef, ParamListBase } from '@react-navigation/native';
import { KeyboardAvoidingView, TouchableOpacity, StyleSheet, View } from "react-native";
import { Text } from 'react-native-paper';

import { theme } from '../theme/theme';
import Logo from '../components/atoms/Logo';
import { Button, TextInput} from '../components/atoms/';
import { emailValidator, passwordValidator } from '../helpers/validator';

type Props = {
  navigation: NavigationContainerRef<ParamListBase>;
}

const LoginScreen: React.FunctionComponent<Props> = ({navigation}: Props) => {

  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'home' }],
    })
  }

  const onSignupPressed = () => {

  }

  const onForgotPasswordPressed = () => {

  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Logo width={170}/>
      <Text style={styles.welcome}>Welcome!</Text>
      <Text style={styles.hint}>Enter your credential to login</Text>
      <TextInput
        label="Email"
        value={email.value}
        icon={'eye'}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
      />
      <TextInput
        label="Password"
        value={password.value}
        icon={'eye'}
        secureTextEntry={true}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
      />
      <Button mode="contained" onPress={onForgotPasswordPressed}>Login</Button>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ffffff"
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
    fontFamily: "Raleway",
    color: theme.colors.black,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
  hint: {
    fontSize: 18,
    fontFamily: "Raleway",
    color: theme.colors.grey,
  }
});

export default LoginScreen;
