import React, { useState } from 'react'
import { NavigationContainerRef, ParamListBase } from '@react-navigation/native'
import { TouchableOpacity, View, StatusBar } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Text, Button } from 'react-native-paper'
import { useHeaderHeight } from '@react-navigation/elements';

import tw from '../helpers/tailwind'
import { metrics } from '../theme/metrics';
import Logo from '../components/atoms/Logo';
import { TextInput} from '../components/atoms/';
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
    console.log(metrics.screenHeight, headerHeight, statusBarHeight)
  }

  const headerHeight = useHeaderHeight();
  const statusBarHeight = StatusBar.currentHeight ?? 0;

  return (
    <SafeAreaView style={tw`h-full`}>
      <KeyboardAwareScrollView style={tw`bg-white flex-1`}>
        <View style={tw.style(`items-center px-10`, {height: (metrics.screenHeight - headerHeight - statusBarHeight)})}>
          <Logo width={170}/>
          <Text style={tw`text-2xl font-bold py-3`}>Welcome!</Text>
          <Text style={tw`text-lg text-grey mb-5`}>Enter your credential to login</Text>
          <TextInput
            label="Email"
            value={email.value}
            icon="email-outline"
            returnKeyType="next"
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
            textContentType="emailAddress"
            keyboardType="email-address"
            onChangeText={(text) => setEmail({ value: text, error: '' })}
          />
          <TextInput
            label="Password"
            value={password.value}
            icon={'eye-off-outline'}
            returnKeyType="done"
            error={!!password.error}
            errorText={password.error}
            secureTextEntry={true}
            onChangeText={(text) => setPassword({ value: text, error: '' })}
          />
          <TouchableOpacity style={tw`w-full items-end`} onPress={onForgotPasswordPressed}>
            <Text style={tw`text-sm text-yellow`} >Forgot password?</Text>
          </TouchableOpacity>
          <Button mode="contained" style={tw`w-full rounded-md mt-5`} labelStyle={tw`text-lg`} onPress={onLoginPressed}>Login</Button>
          <View style={tw`absolute bottom-3 w-full flex-row items-center justify-center`}>
            <Text style={tw`text-lg text-grey`}>Don't have an account?</Text>
            <TouchableOpacity onPress={onSignupPressed}>
              <Text style={tw`text-xl text-yellow`}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
