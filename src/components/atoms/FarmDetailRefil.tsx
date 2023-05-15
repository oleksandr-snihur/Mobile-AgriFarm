import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import tw from '../../helpers/tailwind';

type Props = {
  numFields: number
}

/**
 * component definition
 * @returns ReactNode
 */
const FarmDetailRefil: React.FunctionComponent<Props> = ({numFields}) => {
  const imgFloor = require('../../assets/farm-detail/refill/floor.png');
  const imgValue = require('../../assets/farm-detail/refill/value.png');
  const imgValueUp = require('../../assets/farm-detail/refill/value-up.png');
  const imgEmpty = require('../../assets/farm-detail/refill/empty.png');
  const imgEmptyUp = require('../../assets/farm-detail/refill/empty-up.png');
  
  const floorTop = 95;
  const emptyHeight = 86 - numFields;
  const valueHeight = 32 + numFields;
  const valueTop = emptyHeight - 10;
  const valueUpTop = valueTop - 3;

  return (
    <View style={tw`flex-col items-center justify-center`}>
      <View style={tw`flex items-center justify-center mb-4`}>
        <Text style={tw`text-base font-RalewaySemiBold text-black`}>{numFields} Fields</Text>
      </View>

      <View style={tw`flex relative h-[120px] w-[54px] mx-2`}>
        <Image source={imgFloor} style={tw`absolute top-[${floorTop}px] left-0 h-[20px] w-[54px]`}/>
        <Image source={imgEmptyUp} style={tw`absolute top-0 left-[9px] h-[14px] w-[35px]`}/>
        <Image source={imgEmpty} style={tw`absolute top-[2px] left-[9px] h-[${emptyHeight}px] w-[35px]`}/>
        <Image source={imgValue} style={tw`absolute top-[${valueTop}px] left-[9px] h-[${valueHeight}px] w-[35px]`}/>
        <Image source={imgValueUp} style={tw`absolute top-[${valueUpTop}px] left-[9px] h-[10px] w-[35px]`}/>
      </View>

      <View style={tw`flex items-center justify-center`}>
        <Text style={tw`text-base font-RalewaySemiBold text-[#D29E2D]`}>Refill</Text>
      </View>
    </View>
  );
};

export default FarmDetailRefil;
