import React, { useState } from 'react';
import { TouchableOpacity, View, StatusBar } from "react-native";
import { useHeaderHeight } from '@react-navigation/elements';
import { NavigationContainerRef, ParamListBase } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { Text, Button } from 'react-native-paper';

import tw from '../helpers/tailwind';
import Logo from '../components/atoms/Logo';
import { metrics } from '../theme/metrics';
import { TextInput } from '../components/atoms/';
import { emailValidator, passwordValidator } from '../helpers/validator';

type Props = {
  navigation: NavigationContainerRef<ParamListBase>;
}


/**
 * component definition
 * @returns ReactNode
 */
const LoginScreen: React.FunctionComponent<Props> = ({navigation}: Props) => {

  const [email, setEmail] = useState({ value: 'test@agrisense.com', error: '' })
  const [password, setPassword] = useState({ value: '123456', error: '' })

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
      routes: [{ name: 'homeStack' }],
    })
  }

  const onSignupPressed = () => {
    navigation.navigate('Signup')
  }

  const onForgotPasswordPressed = () => {
  }

  const headerHeight = useHeaderHeight();
  const statusBarHeight = StatusBar.currentHeight ?? 0;

  return (
    <SafeAreaView style={tw`h-full`}>
      <ScrollView style={tw`bg-white flex-1`} showsVerticalScrollIndicator={false}>
        <View style={tw.style(`items-center px-10`, {height: (metrics.screenHeight - headerHeight - statusBarHeight)})}>
          <Logo width={170}/>
          <Text style={tw`text-2xl font-RalewayBold py-3`}>Welcome!</Text>
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
          <TouchableOpacity style={tw`w-full items-end`} activeOpacity={0.7} onPress={onForgotPasswordPressed}>
            <Text style={tw`text-sm text-yellow`}>Forgot password?</Text>
          </TouchableOpacity>
          <Button mode="contained" style={tw.style(`w-full rounded-md mt-5`)} labelStyle={tw`text-lg`} onPress={onLoginPressed}>Login</Button>
          <View style={tw`absolute bottom-3 w-full flex-row items-center justify-center`}>
            <Text style={tw`text-lg text-grey`}>Don't have an account?</Text>
            <TouchableOpacity onPress={onSignupPressed} activeOpacity={0.7}>
              <Text style={tw`text-xl text-yellow`}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
