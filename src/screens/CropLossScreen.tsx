import React, { useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { SafeAreaView } from 'react-native-safe-area-context';

import tw from '../helpers/tailwind';
import SvgCropLossInitimation from '../assets/financial-service/croploss_intimation.svg';
import SvgCropLossStatus from '../assets/financial-service/croploss_status.svg';

type Props = {
  navigation: NavigationProp<Record<string, unknown>>;
}


/**
 * component definition
 * @returns ReactNode
 */
const CropLossScreen: React.FunctionComponent<Props> = ({navigation}: Props) => {
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={tw`h-full bg-screenBackground flex-1 px-[1rem]`}>
      <ScrollView showsVerticalScrollIndicator={false} style={tw`flex`}>
        <View style={tw`flex-1 w-full mt-[1.5rem] h-7/8`}>
          <View style={tw`flex flex-row w-full bg-white p-[0.75rem] rounded-xl mb-[1rem] items-center`}>
            <View style={tw`flex-none`}>
              <SvgCropLossInitimation width={30} height={30} />
            </View>
            <View style={tw`flex-2 pl-[0.75rem]`}>
              <TouchableOpacity
                onPress={() => {}}
                activeOpacity={0.7}
              >
                <Text style={tw`text-base text-black font-RalewaySemiBold`}>Crop Loss Intimation</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={tw`flex flex-row w-full bg-white p-[0.75rem] rounded-xl mb-[1rem] items-center`}>
            <View style={tw`flex-none`}>
              <SvgCropLossStatus width={30} height={30} />
            </View>
            <View style={tw`flex-2 pl-[0.75rem]`}>
              <TouchableOpacity
                onPress={() => {}}
                activeOpacity={0.7}
              >
                <Text style={tw`text-base text-black font-RalewaySemiBold`}>Crop Loss Status</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CropLossScreen;
