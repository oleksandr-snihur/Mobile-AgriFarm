import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import SvgBtnEdit from '../../assets/icons/btn_edit.svg';
import SvgBtnDelete from '../../assets/icons/btn_delete.svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import tw from '../../helpers/tailwind';

type Props = {
  imgSrc: string;
  cate: string;
  price: string;
}

/**
 * component definition
 * @returns ReactNode
 */
const ShopSellCategory: React.FunctionComponent<Props> = ({imgSrc, cate, price}) => {
  const imgWheat = require("../../assets/shop/wheat.jpg");
  const imgApple = require("../../assets/shop/apple.jpg");
  const imgBanana = require("../../assets/shop/banana.jpg");
  const imgOrange = require("../../assets/shop/orange.jpg");

  return (
    <View style={tw`flex flex-row w-full bg-white shadow-[#26BC80FF] rounded-xl p-[1rem] mb-[1rem]`}>
      <View style={tw`flex-none`}>
        {
          imgSrc==="wheat" ? <Image source={imgWheat} style={tw`w-14 h-14 rounded-lg`} /> : null
        }
        {
          imgSrc==="apple" ? <Image source={imgApple} style={tw`w-14 h-14 rounded-lg`} /> : null
        }
        {
          imgSrc==="banana" ? <Image source={imgBanana} style={tw`w-14 h-14 rounded-lg`} /> : null
        }
        {
          imgSrc==="orange" ? <Image source={imgOrange} style={tw`w-14 h-14 rounded-lg`} /> : null
        }
      </View>
      <View style={tw`flex-2 pl-[1.5rem] justify-center`}>
        <Text style={tw`text-base font-RalewaySemiBold`}>{cate}</Text>
        <Text style={tw`text-sm text-green font-RalewayMedium`}>${price}</Text>
      </View>
      <View style={tw`flex-1 flex-row pl-[1.5rem] justify-center`}>
        <TouchableOpacity style={tw`flex-1 items-end justify-center`} activeOpacity={0.7} onPress={() => {}}>
          <SvgBtnEdit width={30} height={30} style={tw`mr-2`}/>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex-1 items-end justify-center`} activeOpacity={0.7} onPress={() => {}}>
          <SvgBtnDelete width={30} height={30} style={tw`mr-2`}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShopSellCategory;
