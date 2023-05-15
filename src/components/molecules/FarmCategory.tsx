import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import tw from '../../helpers/tailwind';

type Props = {
  navigation: NavigationProp<Record<string, unknown>>;
  imgSrc: string;
  tempHigh: string;
  tempLow: string;
  numVal: string;
  cate: string;
  subCate: string,
  subDate: string;
  size: string;
  totalDate: string;
  desc: string;
  dots: boolean
}

/**
 * component definition
 * @returns ReactNode
 */
const FarmCategory: React.FunctionComponent<Props> = ({navigation, imgSrc, tempHigh, tempLow, numVal, cate, subCate, subDate, size, totalDate, desc, dots=false}) => {
  const img = require("../../assets/my-farm/my-farm.jpg");

  return (
    <View style={tw`flex flex-row w-full bg-white shadow-[#26BC80FF] rounded-xl p-[0.5rem] mb-[0.5rem]`}>
      <View style={tw`flex-none`}>
        <Image source={img} style={tw`w-18 h-18 rounded-xl`} />
        <View style={tw`flex items-center absolute top-0 left-0 bg-green rounded-t-xl rounded-tr-xl w-18`}>
          <Text style={tw`text-sm text-white`}>{tempHigh} - {tempLow}°C</Text>
        </View>
        <View style={tw`flex items-center w-18`}>
          <Text style={tw`text-base font-RalewaySemiBold text-yellow`}>{numVal}</Text>
        </View>
      </View>
      <View style={tw`flex-1 pl-[1rem]`}>
        <View style={tw`flex flex-row`}>
          <TouchableOpacity 
            style={tw`flex-none`}
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('appStack', {screen: 'Farm Details'})
            }}
          >
            <Text style={tw`flex-none text-base font-RalewayBold`}>{cate}</Text>
          </TouchableOpacity>
          <View style={tw`flex-1 items-end justify-end`}>
            <View style={tw`flex flex-row`}>
              <Icon name="camera" size={24} color="#000" />
              {dots ? <Icon name="dots-vertical" size={24} color="#000" style={tw`ml-2`}/> : null}
            </View>
          </View>
        </View>
        <View style={tw`flex flex-row`}>
          <Text style={tw`flex-none text-sm text-greyLight font-RalewaySemiBold`}>{subCate}</Text>
          <View style={tw`flex-1 items-end justify-end`}>
            <Text style={tw`text-sm text-greyLight font-RalewaySemiBold`}>{subDate}</Text>
          </View>
        </View>
        <View style={tw`flex flex-row`}>
          <Text style={tw`flex-none text-sm text-greenLight font-RalewayMedium`}>{size} Acre</Text>
          <View style={tw`flex-1 items-end justify-end`}>
            <Text style={tw`text-sm text-green font-RalewayMedium`}>{totalDate} days of sowing</Text>
          </View>
        </View>
        <View style={tw`flex flex-row`}>
          <Text style={tw`flex-none text-sm text-black font-RalewayMedium`}>{desc}</Text>
        </View>
      </View>
    </View>
  );
};

export default FarmCategory;
