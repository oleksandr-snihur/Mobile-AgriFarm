import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, View, ViewStyle } from 'react-native';
import { Text } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import tw from '../../helpers/tailwind';

type Props = {
  imgSrc: string;
  title: string;
  quantity: string;
  priceRangeUnit: string;
}

/**
 * component definition
 * @returns ReactNode
 */
const FarmCategory: React.FunctionComponent<Props> = ({imgSrc, title, quantity, priceRangeUnit}) => {
  const imgWheat = require("../../assets/shop/wheat.jpg");
  const imgApple = require("../../assets/shop/apple.jpg");
  const imgBanana = require("../../assets/shop/banana.jpg");
  const imgOrange = require("../../assets/shop/orange.jpg");

  return (
    <View style={tw`flex flex-row w-full h-24 bg-white shadow-[#26BC80FF] rounded-xl mb-[1rem]`}>
      <View style={tw`flex-none`}>
        {
          imgSrc==="wheat" ? <Image source={imgWheat} style={tw`w-24 h-24 rounded-tl-xl rounded-bl-xl`} /> : null
        }
        {
          imgSrc==="apple" ? <Image source={imgApple} style={tw`w-24 h-24 rounded-tl-xl rounded-bl-xl`} /> : null
        }
        {
          imgSrc==="banana" ? <Image source={imgBanana} style={tw`w-24 h-24 rounded-tl-xl rounded-bl-xl`} /> : null
        }
        {
          imgSrc==="orange" ? <Image source={imgOrange} style={tw`w-24 h-24 rounded-tl-xl rounded-bl-xl`} /> : null
        }
      </View>
      <View style={tw`flex-1 p-[0.5rem] pl-[1rem]`}>
        <View style={tw`flex flex-row pr-[0.5rem]`}>
          <Text style={tw`flex-none text-base font-RalewayBold`}>{title}</Text>
          <View style={tw`flex-1 items-end justify-end`}>
            <View style={tw`flex flex-row`}>
              <Icon name="map-marker" size={24} color="#26BC80" />
              <Icon name="phone" size={24} color="#26BC80" style={tw`ml-2`}/>
            </View>
          </View>
        </View>
        <View style={tw`flex flex-row`}>
          <Text style={tw`flex-1 text-xs text-greenLight font-RalewaySemiBold`}>QUANTITY</Text>
          <View style={tw`flex-1 items-start justify-start`}>
            <Text style={tw`flex-1 text-xs text-greenLight font-RalewaySemiBold`}>PRICE RANGE/UNIT</Text>
          </View>
        </View>
        <View style={tw`flex flex-row`}>
          <Text style={tw`flex-1 text-base text-black font-RalewayBold`}>{quantity}</Text>
          <View style={tw`flex-1 items-start justify-start`}>
            <Text style={tw`text-base text-black font-RalewayBold`}>${priceRangeUnit}</Text>
          </View>
        </View>
        <View style={tw`flex flex-row`}>
          <Text style={tw`flex-1 text-sm text-greyLight font-RalewayMedium`}>tonne(s)</Text>
          <Text style={tw`flex-1 text-sm text-greyLight font-RalewayMedium`}>per quintal</Text>
        </View>
      </View>
    </View>
  );
};

export default FarmCategory;
