import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { SafeAreaView } from 'react-native-safe-area-context';

import tw from '../helpers/tailwind';
import SvgHelpDesk from '../assets/images/helpdesk.svg';
import { Button, TextInput } from 'react-native-paper';


type Props = {
  navigation: NavigationProp<Record<string, unknown>>;
}


/**
 * component definition
 * @returns ReactNode
 */
const HelpDeskScreen: React.FunctionComponent<Props> = ({navigation}: Props) => {
  useEffect(() => {}, []);

  const [name, setName] = useState("Admin");
  const [mobile, setMobile] = useState("+11234567890");
  const [email, setEmail] = useState("email123@gmail.com");
  const [comments, setComments] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

  return (
    <SafeAreaView style={tw`h-full bg-screenBackground flex-1 px-[1rem]`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`flex-1 w-full`}>
          <View style={tw`flex-1 items-center justify-center mt-2`}>
            <SvgHelpDesk width={130} height={130} />
            <Text style={tw`text-black font-RalewaySemiBold mt-1`}>Welcome, please kindly fill below details</Text>
          </View>
          <Text style={tw`text-green font-RalewaySemiBold mt-2`}>Name</Text>

          <TextInput
            value={name}
            mode='outlined'
            returnKeyType="next"
            autoCapitalize="none"
            onChangeText={(text) => setName(text)}
            style={tw`w-full h-10 rounded-md border-l-grey`}
          />

          <Text style={tw`text-green font-RalewaySemiBold mt-3`}>Mobile</Text>
          <TextInput
            value={mobile}
            mode='outlined'
            returnKeyType="next"
            autoCapitalize="none"
            onChangeText={(text) => setMobile(text)}
            style={tw`w-full h-10 rounded-md border-l-grey`}
          />

          <Text style={tw`text-green font-RalewaySemiBold mt-3`}>Email</Text>
          <TextInput
            value={email}
            mode='outlined'
            returnKeyType="next"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
            style={tw`w-full h-10 rounded-md border-l-grey`}
          />

          <Text style={tw`text-green font-RalewaySemiBold mt-3`}>Comments</Text>
          <TextInput
            value={comments}
            multiline
            mode='outlined'
            returnKeyType="next"
            autoCapitalize="none"
            onChangeText={(text) => setComments(text)}
            style={tw`w-full h-25 rounded-md border-l-grey`}
          />

          <Button mode="contained" style={tw.style(`w-full rounded-md mt-5 mb-2`)} labelStyle={tw`text-lg`} elevation={5}>Submit</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpDeskScreen;
