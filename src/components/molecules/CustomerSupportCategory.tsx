import React from 'react';
import { View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';

import tw from '../../helpers/tailwind';
import SvgPhone from '../../assets/icons/phone.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  imgSrc: string;
  name: string;
  location: string;
}

/**
 * component definition
 * @returns ReactNode
 */
const CustomerSupportCategory: React.FunctionComponent<Props> = ({imgSrc, name, location}) => {
  const imgWheat = require("../../assets/avatar/man.jpg");
  const imgApple = require("../../assets/avatar/boy.jpg");
  const imgBanana = require("../../assets/avatar/avatar.jpeg");
  const imgOrange = require("../../assets/shop/orange.jpg");

  return (
    <View style={tw`flex flex-row w-full bg-white shadow-[#26BC80FF] rounded-xl p-[0.5rem] mb-[0.5rem]`}>
      <View style={tw`flex-none`}>
        {
          imgSrc==="wheat" ? <Avatar.Image size={50} source={imgWheat} /> : null
        }
        {
          imgSrc==="apple" ? <Avatar.Image size={50} source={imgApple} /> : null
        }
        {
          imgSrc==="banana" ? <Avatar.Image size={50} source={imgBanana} /> : null
        }
        {
          imgSrc==="orange" ? <Avatar.Image size={50} source={imgOrange} /> : null
        }
      </View>
      <View style={tw`flex-2 pl-[1.5rem]`}>
        <Text style={tw`text-base font-RalewaySemiBold`}>{name}</Text>
        <Text style={tw`text-sm text-greyLight font-RalewayMedium`}>{location}</Text>
      </View>
      <TouchableOpacity style={tw`flex-1 items-end justify-center`} activeOpacity={0.7} onPress={() => {}}>
        <SvgPhone width={30} height={30} style={tw`mr-2`}/>
      </TouchableOpacity>

    </View>
  );
};

export default CustomerSupportCategory;
