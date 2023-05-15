import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { SafeAreaView } from 'react-native-safe-area-context';

import tw from '../helpers/tailwind';
import SvgAppStatus from '../assets/financial-service/application-status.svg';
import SvgCropLoss from '../assets/financial-service/crop-lose.svg';
import SvgFarmerFaq from '../assets/financial-service/farmer-faq.svg';
import SvgHelpDesk from '../assets/financial-service/help-desk.svg';
import SvgInsurance from '../assets/financial-service/insurance-premium-calculator.svg';

type Props = {
  navigation: NavigationProp<Record<string, unknown>>;
}


/**
 * component definition
 * @returns ReactNode
 */
const FinancialServiceScreen: React.FunctionComponent<Props> = ({navigation}: Props) => {
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={tw`h-full bg-screenBackground flex-1 px-[1rem]`}>
      <ScrollView showsVerticalScrollIndicator={false} style={tw`flex`}>
        <View style={tw`flex-1 w-full mt-[1.5rem] h-7/8`}>
          <View style={tw`flex flex-row w-full bg-white rounded-xl mb-[1rem] items-center`}>
            <View style={tw`flex-none`}>
              <SvgCropLoss width={70} height={70} />
            </View>
            <View style={tw`flex-2 pl-[0.5rem]`}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('appStack', {screen: 'Crop Loss'})
                }}
                activeOpacity={0.7}
              >
                <Text style={tw`text-base text-green font-RalewaySemiBold`}>Crop Loss</Text>
              </TouchableOpacity>
              <Text style={tw`text-xs text-greyLight font-RalewaySemiBold`}>Report crop damage and claim</Text>
            </View>
          </View>

          <View style={tw`flex flex-row w-full bg-white rounded-xl mb-[1rem] items-center`}>
            <View style={tw`flex-none`}>
              <SvgInsurance width={70} height={70} />
            </View>
            <View style={tw`flex-2 pl-[0.5rem]`}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('appStack', {screen: 'Insurance Premium Calculator'})
                }}
                activeOpacity={0.7}
              >
                <Text style={tw`text-base text-[#1B78C3] font-RalewaySemiBold`}>Insurance Premium Calculator</Text>
              </TouchableOpacity>
              <Text style={tw`text-xs text-greyLight font-RalewaySemiBold`}>Know your insurance premium before</Text>
            </View>
          </View>

          <View style={tw`flex flex-row w-full bg-white rounded-xl mb-[1rem] items-center`}>
            <View style={tw`flex-none`}>
              <SvgAppStatus width={70} height={70} />
            </View>
            <View style={tw`flex-2 pl-[0.5rem]`}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('appStack', {screen: 'Application Status'})
                }}
                activeOpacity={0.7}
              >
                <Text style={tw`text-base text-yellow font-RalewaySemiBold`}>Application Status</Text>
              </TouchableOpacity>
              <Text style={tw`text-xs text-greyLight font-RalewaySemiBold`}>Know your application status on every step</Text>
            </View>
          </View>

          <View style={tw`flex flex-row w-full bg-white rounded-xl mb-[1rem] items-center`}>
            <View style={tw`flex-none`}>
              <SvgHelpDesk width={70} height={70} />
            </View>
            <View style={tw`flex-2 pl-[0.5rem]`}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('appStack', {screen: 'Help Desk'})
                }}
                activeOpacity={0.7}
              >
                <Text style={tw`text-base text-[#13C5C5] font-RalewaySemiBold`}>Help Desk</Text>
              </TouchableOpacity>
              <Text style={tw`text-xs text-greyLight font-RalewaySemiBold`}>Ask or tell us about your problems</Text>
            </View>
          </View>

          <View style={tw`flex flex-row w-full bg-white rounded-xl mb-[1rem] items-center`}>
            <View style={tw`flex-none`}>
              <SvgFarmerFaq width={70} height={70} />
            </View>
            <View style={tw`flex-2 pl-[0.5rem]`}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('appStack', {screen: 'Farmer FAQ'})
                }}
                activeOpacity={0.7}
              >
                <Text style={tw`text-base text-[#747474] font-RalewaySemiBold`}>Farmer FAQ</Text>
              </TouchableOpacity>
              <Text style={tw`text-xs text-greyLight font-RalewaySemiBold`}>Frequently asked questions</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FinancialServiceScreen;
