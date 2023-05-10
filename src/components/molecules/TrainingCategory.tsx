import React from 'react';
import { View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';

import tw from '../../helpers/tailwind';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  imgSrc: string;
  title: string;
  view: number;
}

/**
 * component definition
 * @returns ReactNode
 */
const TrainingCategory: React.FunctionComponent<Props> = ({imgSrc, title, view}) => {
  const imgMan = require("../../assets/avatar/man.jpg");

  return (
    <View style={tw`flex flex-row w-full bg-white shadow-[#26BC80FF] shadow-lg rounded-xl p-[1rem] mb-[1rem]`}>
      <View style={tw`flex-none`}>
        <TouchableOpacity style={tw`flex relative `} activeOpacity={0.7} onPress={() => {}}>
          <Avatar.Image size={60} source={imgMan} />
          <View style={tw`w-full h-full absolute bg-[rgba(0,0,0,0.5)] flex justify-center items-center rounded-[30px]`}>
            <Icon name="play" size={30} style={tw`text-white`}/>
          </View>
        </TouchableOpacity>
      </View>
      <View style={tw`flex-2 ml-[1rem] relative`}>
        <Text numberOfLines={2} style={tw`text-base leading-[18px] font-RalewaySemiBold absolute top-0 left-0`}>{title}</Text>
        <Text style={tw`text-sm text-greyLight font-RalewayMedium absolute bottom-0 left-0`}><Icon name="eye-outline" size={16} />{view}</Text>
      </View>
    </View>
  );
};

export default TrainingCategory;
