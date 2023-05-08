import React, { useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import SwitchSelector from 'react-native-switch-selector';

import { SafeAreaView } from 'react-native-safe-area-context';

import tw from '../helpers/tailwind';
import ShopCategory from '../components/molecules/ShopCategory';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  navigation: NavigationProp<Record<string, unknown>>;
}


/**
 * component definition
 * @returns ReactNode
 */
const ShopScreen: React.FunctionComponent<Props> = ({navigation}: Props) => {
  useEffect(() => {}, []);

  const options = [
    { label: "Buy", value: "Buy" },
    { label: "Sell", value: "Sell" }
  ];

  return (
    <SafeAreaView style={tw`h-1/1 bg-screenBackground flex-1 px-[1rem]`}>
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
            onPress={() => {}}
          />
        </View>
        <TouchableOpacity style={tw`flex-1 items-center justify-center`} activeOpacity={0.7} onPress={() => {}}>
          <Icon name="filter-variant" size={35} color="#26BC80" />
        </TouchableOpacity>
      </View>

      <View style={tw`flex w-full mt-[2rem] h-4/5`}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ShopCategory imgSrc="wheat" title="Wheat" quantity="120" priceRangeUnit="10-20"/>
          <ShopCategory imgSrc="apple" title="Apple" quantity="80" priceRangeUnit="15-25"/>
          <ShopCategory imgSrc="banana" title="Banana" quantity="60" priceRangeUnit="8-15"/>
          <ShopCategory imgSrc="orange" title="Orange" quantity="75" priceRangeUnit="10-15"/>
          {/* <ShopCategory imgSrc="wheat" title="Rice" quantity="100" priceRangeUnit="15-25"/> */}
        </ScrollView>
      </View>
      
    </SafeAreaView>
  );
};

export default ShopScreen;
