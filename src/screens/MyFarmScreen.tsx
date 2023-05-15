import React, { useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { SafeAreaView } from 'react-native-safe-area-context';

import tw from '../helpers/tailwind';
import { Avatar } from 'react-native-paper';
import FarmCategory from '../components/molecules/FarmCategory';

type Props = {
  navigation: NavigationProp<Record<string, unknown>>;
}


/**
 * component definition
 * @returns ReactNode
 */
const MyFarmScreen: React.FunctionComponent<Props> = ({navigation}: Props) => {
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={tw`h-full bg-screenBackground flex-1 px-[1rem]`}>
      <TouchableOpacity style={tw`w-full items-start mt-[1rem]`} activeOpacity={0.7} onPress={() => {}}>
        <Text style={tw`text-green font-RalewaySemiBold`}>Add New</Text>
      </TouchableOpacity>
      <View style={tw`flex w-full mt-[1rem] mx-2`}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={tw`flex-1 items-center w-1/4 px-[0.5rem]`}>
            <Avatar.Image size={50} source={require('../assets/my-farm/my-farm.jpg')} />
            <Text style={tw`text-sm font-RalewayBold`}>My Farm</Text>
          </View>
          <View style={tw`flex-1 items-center w-1/4 px-[0.5rem]`}>
            <Avatar.Image size={50} source={require('../assets/my-farm/poly-house.jpg')} />
            <Text style={tw`text-sm font-RalewayBold`}>Poly House</Text>
          </View>
          <View style={tw`flex-1 items-center w-1/4 px-[0.5rem]`}>
            <Avatar.Image size={50} source={require('../assets/my-farm/terrace-garden.jpg')} />
            <Text style={tw`text-sm leading-4 font-RalewayBold max-w-[5rem]`}>Terrace Garden</Text>
          </View>
          <View style={tw`flex-1 items-center w-1/4 px-[0.5rem]`}>
            <Avatar.Image size={50} source={require('../assets/my-farm/water-body.jpg')} />
            <Text style={tw`text-sm font-RalewayBold max-w-[5rem]`}>Water Body</Text>
          </View>
          <View style={tw`flex-1 items-center w-1/4 px-[0.5rem]`}>
            <Avatar.Image size={50} source={require('../assets/my-farm/water-body.jpg')} />
            <Text style={tw`text-sm font-RalewayBold max-w-[5rem]`}>XXX</Text>
          </View>
          <View style={tw`flex-1 items-center w-1/4 px-[0.5rem]`}>
            <Avatar.Image size={50} source={require('../assets/my-farm/water-body.jpg')} />
            <Text style={tw`text-sm font-RalewayBold max-w-[5rem]`}>XXX</Text>
          </View>
        </ScrollView>
      </View>

      <Text style={tw`w-full text-green font-RalewaySemiBold items-start mt-[1rem]`}>My Farms</Text>
      <View style={tw`flex w-full mt-[1rem] mr-4 h-2/3`}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FarmCategory navigation={navigation} imgSrc="" tempHigh="28" tempLow="17" numVal="57400" cate="Tomato" subCate="Tomato" subDate={'15/07/2022'}
            size="0.7" totalDate="119" desc="_" dots={false}
          />
          <FarmCategory navigation={navigation} imgSrc="" tempHigh="25" tempLow="13" numVal="57400" cate="Broccoli" subCate="_" subDate={'15/08/2022'}
            size="62.8" totalDate="120" desc="Clearing in afternoon" dots={true}
          />
          <FarmCategory navigation={navigation} imgSrc="" tempHigh="28" tempLow="17" numVal="57400" cate="Cabbage" subCate="_" subDate={'15/09/2022'}
            size="0.7" totalDate="119" desc="Partly cloud through out the day with rain" dots={true}
          />
          <FarmCategory navigation={navigation} imgSrc="" tempHigh="28" tempLow="17" numVal="57400" cate="Corn" subCate="Corn" subDate={'15/07/2022'}
            size="0.7" totalDate="119" desc="Cloudy skies through out the day with rain" dots={true}
          />
          <FarmCategory navigation={navigation} imgSrc="" tempHigh="28" tempLow="17" numVal="57400" cate="Cabbage" subCate="_" subDate={'15/09/2022'}
            size="0.7" totalDate="119" desc="Partly cloud through out the day with rain" dots={true}
          />
        </ScrollView>
      </View>
      
    </SafeAreaView>
  );
};

export default MyFarmScreen;
