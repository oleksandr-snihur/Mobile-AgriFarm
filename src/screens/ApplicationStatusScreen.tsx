import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { SafeAreaView } from 'react-native-safe-area-context';

import tw from '../helpers/tailwind';
import SvgCaptcha from '../assets/images/captcha.svg';
import { Button, TextInput } from 'react-native-paper';


type Props = {
  navigation: NavigationProp<Record<string, unknown>>;
}


/**
 * component definition
 * @returns ReactNode
 */
const ApplicationStatusScreen: React.FunctionComponent<Props> = ({navigation}: Props) => {
  useEffect(() => {}, []);

  const [appNo, setAppNo] = useState("123456");
  const [captcha, setCaptcha] = useState("wszkd");

  return (
    <SafeAreaView style={tw`h-full bg-screenBackground flex-1 px-[1rem]`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`flex-1 w-full items-start justify-start h-7/8`}>
          <Text style={tw`text-green font-RalewaySemiBold mt-5`}>Enter Application No</Text>

          <TextInput
            value={appNo}
            mode='outlined'
            returnKeyType="next"
            autoCapitalize="none"
            onChangeText={(text) => setAppNo(text)}
            style={tw`w-full h-10 rounded-md border-l-grey mt-2`}
          />

          <SvgCaptcha style={tw`w-full mt-4 mb-2`}/>

          <Text style={tw`text-green font-RalewaySemiBold mt-4`}>Enter Captcha</Text>
          <TextInput
            value={captcha}
            mode='outlined'
            returnKeyType="next"
            autoCapitalize="none"
            onChangeText={(text) => setCaptcha(text)}
            style={tw`w-full h-10 rounded-md border-l-grey mt-2`}
          />

          <Button mode="contained" style={tw.style(`w-full rounded-md mt-16 mb-2`)} labelStyle={tw`text-lg`} elevation={5}>Check Status</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ApplicationStatusScreen;
