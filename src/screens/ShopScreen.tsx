import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import SwitchSelector from 'react-native-switch-selector';

import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import tw from '../helpers/tailwind';
import ShopCategory from '../components/molecules/ShopCategory';

import SvgPlus from '../assets/icons/btn_plus.svg';
import ShopSellCategory from '../components/molecules/ShopSellCategory';
import { Button } from 'react-native-paper';

type Props = {
  navigation: NavigationProp<Record<string, unknown>>;
}


/**
 * component definition
 * @returns ReactNode
 */
const ShopScreen: React.FunctionComponent<Props> = ({navigation}: Props) => {
  useEffect(() => {}, []);

  const [switchValue, setSwitchValue] = useState("Buy");
  const options = [
    { label: "Buy", value: "Buy" },
    { label: "Sell", value: "Sell" }
  ];

  return (
    <SafeAreaView style={tw`h-full bg-screenBackground flex-1 px-[1rem]`}>
      <View style={tw`flex flex-row mt-[2rem]`}>
        <View style={tw`flex-none w-3/4 pl-[1rem]`}>
          <SwitchSelector
            options={options}
            textColor="#00933F"
            selectedColor="#fff"
            buttonColor="#26BC80"
            backgroundColor="#DEF9EF"
            textStyle={tw`text-lg font-RalewayBold`}
            selectedTextStyle={tw`text-lg font-RalewayBold`}
            initial={0}
            onPress={(value) => {setSwitchValue(value)}}
          />
        </View>
        <TouchableOpacity style={tw`flex-1 items-center justify-center`} activeOpacity={0.7} onPress={() => {}}>
          <Icon name="filter-variant" size={35} color="#26BC80" />
        </TouchableOpacity>
      </View>
      
      {switchValue === "Buy" ?
        <>
          <View style={tw`flex w-full mt-[2rem] h-4/5`}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <ShopCategory imgSrc="wheat" cate="Wheat" quantity="120" priceRangeUnit="10-20"/>
              <ShopCategory imgSrc="apple" cate="Apple" quantity="80" priceRangeUnit="15-25"/>
              <ShopCategory imgSrc="banana" cate="Banana" quantity="60" priceRangeUnit="8-15"/>
              <ShopCategory imgSrc="orange" cate="Orange" quantity="75" priceRangeUnit="10-15"/>
            </ScrollView>
          </View>

          <TouchableOpacity style={tw`absolute bottom-[2rem] right-[2rem]`} activeOpacity={0.7} onPress={() => {}}>
            <SvgPlus width={40} height={40}/>
          </TouchableOpacity>
        </> :
        <>
          <View style={tw`w-full flex justify-center items-center`}>
            <Button mode="outlined" style={tw`flex w-5/6 rounded-md mt-6 border-2 border-green`} labelStyle={tw`text-xl`} elevation={5}>+ Upload Product</Button>
          </View>
          
          <View style={tw`flex w-full mt-6 h-4/5`}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <ShopSellCategory imgSrc="apple" cate="Apple" price="15.00" />
              <ShopSellCategory imgSrc="wheat" cate="Wheat" price="11.00" />
              <ShopSellCategory imgSrc="banana" cate="Banana" price="8.00" />
              <ShopSellCategory imgSrc="orange" cate="Orange" price="9.00" />
            </ScrollView>
          </View>
        </>
      }
      
    </SafeAreaView>
  );
};

export default ShopScreen;
