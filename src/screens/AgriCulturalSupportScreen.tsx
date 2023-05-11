import React, { useEffect, useState } from 'react';
import { ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { SafeAreaView } from 'react-native-safe-area-context';

import tw from '../helpers/tailwind';
import CustomerSupportCategory from '../components/molecules/CustomerSupportCategory';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  navigation: NavigationProp<Record<string, unknown>>;
}


/**
 * component definition
 * @returns ReactNode
 */
const AgriCulturalSupportScreen: React.FunctionComponent<Props> = ({navigation}: Props) => {
  useEffect(() => {}, []);

  const [searchText, setSearchText] = useState('Ontario')

  const handleSearchPress = () => {
    
  };

  return (
    <SafeAreaView style={tw`h-full bg-screenBackground flex-1 px-[1rem]`}>
      <ScrollView style={tw`flex-1`} showsVerticalScrollIndicator={false}>
        <View style={tw`flex flex-row mt-[1rem]`}>
          <View style={tw`flex-none w-6/7`}>
            <View style={tw`flex flex-row items-center rounded-2xl bg-white`}>
              <TextInput
                value={searchText}
                placeholder='Search by city, town'
                placeholderTextColor={"#B3B3B3"}
                onChangeText={(text) => setSearchText(text)}
                style={tw`w-full flex-none text-base font-RalewaySemiBold text-gray-500 py-2 px-3 no-underline`}
              />
              <TouchableOpacity onPress={handleSearchPress} style={tw`absolute right-[1rem]`} activeOpacity={0.7}>
                <Icon name="magnify" size={25} color="gray" />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={tw`flex-1 items-end justify-center`} activeOpacity={0.7} onPress={() => {}}>
            <Icon name="filter-variant" size={35} color="#26BC80" />
          </TouchableOpacity>
        </View>

        <View style={tw`flex w-full mt-[1rem] h-6/7`}>
          <ScrollView showsVerticalScrollIndicator={false} style={tw`h-full`}>
            <CustomerSupportCategory imgSrc="farmer1" name="Benjamin Brown" location="Ontario"/>
            <CustomerSupportCategory imgSrc="farmer2" name="Christopher Garcia" location="Ontario" />
            <CustomerSupportCategory imgSrc="man" name="David Johnson" location="Ontario" />
            <CustomerSupportCategory imgSrc="farmer3" name="William Smith" location="Ontario" />
            <CustomerSupportCategory imgSrc="farmer2" name="Christopher Garcia" location="Ontario" />
            <CustomerSupportCategory imgSrc="farmer1" name="hristopher Garcia" location="Ontario"/>
            <CustomerSupportCategory imgSrc="man" name="Benjamin Brown" location="Ontario" />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AgriCulturalSupportScreen;
