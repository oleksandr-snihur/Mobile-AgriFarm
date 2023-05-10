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
  const imgFarmer1 = require("../../assets/avatar/farmer1.jpg");
  const imgFarmer2 = require("../../assets/avatar/farmer2.jpg");
  const imgMan = require("../../assets/avatar/man.jpg");
  const imgFarmer3 = require("../../assets/avatar/farmer3.jpg");

  return (
    <View style={tw`flex flex-row w-full bg-white shadow-[#26BC80FF] rounded-xl p-[0.5rem] mb-[0.5rem]`}>
      <View style={tw`flex-none`}>
        {
          imgSrc==="farmer1" ? <Avatar.Image size={50} source={imgFarmer1} /> : null
        }
        {
          imgSrc==="farmer2" ? <Avatar.Image size={50} source={imgFarmer2} /> : null
        }
        {
          imgSrc==="farmer3" ? <Avatar.Image size={50} source={imgFarmer3} /> : null
        }
        {
          imgSrc==="man" ? <Avatar.Image size={50} source={imgMan} /> : null
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
