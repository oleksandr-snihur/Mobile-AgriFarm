import React, { useState } from 'react'
import { TouchableOpacity, View, StatusBar } from "react-native"
import { useHeaderHeight } from '@react-navigation/elements';
import { NavigationContainerRef, ParamListBase } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Button } from 'react-native-paper'
import { ScrollView } from 'react-native';

import RegisterType from '../components/molecules/RegisterType';
import tw from '../helpers/tailwind'
import { metrics } from '../theme/metrics';
import { TextInput } from '../components/atoms';
import { emailValidator, passwordValidator } from '../helpers/validator';

import SvgFarmer from '../assets/icons/farmer.svg';
import SvgBuyer from '../assets/icons/buyer.svg';

type Props = {
  navigation: NavigationContainerRef<ParamListBase>;
}


/**
 * component definition
 * @returns ReactNode
 */
const SignupScreen: React.FunctionComponent<Props> = ({navigation}: Props) => {

  const [registerType, setRegisterType] = useState(true); // true = farmer, false = buyer
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [passwordConfirm, setPasswordConfirm] = useState({ value: '', error: '' })

  const onSignupPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    if(password.value !== passwordConfirm.value) {
      setPasswordConfirm({ ...password, error: "Password not matching" });
      return;
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'homeStack' }],
    })
  }

  const onLoginPressed = () => {
    navigation.navigate('Login');
  }

  const headerHeight = useHeaderHeight();
  const statusBarHeight = StatusBar.currentHeight ?? 0;

  return (
    <SafeAreaView style={tw`h-full`}>
      <ScrollView style={tw`bg-white flex-1`} showsVerticalScrollIndicator={false}>
        <View style={tw.style(`px-10 items-center`, {height: (metrics.screenHeight - headerHeight - statusBarHeight)})}>
          <View style={tw`w-full flex-row items-start mb-2`}>
            <Text style={tw`self-center mr-4 text-lg`}>Register As</Text>
            <RegisterType text="Farmer" active={registerType} onPress={() => {setRegisterType(true)}} style={tw`mr-4`}>
              <SvgFarmer width={30} height={30}/>
            </RegisterType>
            <RegisterType text="Buyer" active={!registerType} onPress={() => {setRegisterType(false)}}>
              <SvgBuyer width={30} height={30}/>
            </RegisterType>
          </View>
          <TextInput
            label="First Name"
            icon="account-outline"
          />
          <TextInput
            label="Last Name"
            icon="account-outline"
          />
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
            label="Mobile No"
            icon="phone-outline"
          />
          <TextInput
            label="Password"
            value={password.value}
            icon={'eye-outline'}
            returnKeyType="next"
            error={!!password.error}
            errorText={password.error}
            secureTextEntry={true}
            onChangeText={(text) => setPassword({ value: text, error: '' })}
          />
          <TextInput
            label="Password Confirm"
            value={passwordConfirm.value}
            icon={'eye-outline'}
            returnKeyType="done"
            error={!!passwordConfirm.error}
            errorText={passwordConfirm.error}
            secureTextEntry={true}
            onChangeText={(text) => setPasswordConfirm({ value: text, error: '' })}
          />
          <View style={tw`w-full items-start`}>
            <Text style={tw`text-base`}>By signing up, you agree with our</Text>
          </View>
          <TouchableOpacity style={tw`w-full items-start`} activeOpacity={0.7}>
            <Text style={tw`text-base text-yellow underline`}>Terms of Service & Privacy Policy</Text>
          </TouchableOpacity>
          <Button mode="contained" style={tw`w-full rounded-md mt-3`} labelStyle={tw`text-lg`} onPress={onSignupPressed}>Create an account</Button>
          <View style={tw`absolute bottom-3 w-full flex-row items-center justify-center mx-auto`}>
            <Text style={tw`text-lg text-grey`}>Already have an account?</Text>
            <TouchableOpacity onPress={onLoginPressed} activeOpacity={0.7}>
              <Text style={tw`text-xl text-yellow`}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;
