import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainerRef, ParamListBase } from '@react-navigation/native';

import { SafeAreaView } from 'react-native-safe-area-context';

import tw from '../helpers/tailwind';
import HomeCategory from '../components/molecules/HomeCategory';

import SvgFarm from '../assets/icons/farm.svg';
import SvgShop from '../assets/icons/shop.svg';
import SvgFinancialService from '../assets/icons/financial_service.svg';
import SvgTraining from '../assets/icons/training.svg';
import SvgAgriCulSupport from '../assets/icons/agricul_support.svg';
import SvgCusSupport from '../assets/icons/cus_support.svg';
import SvgRain from '../assets/icons/icon_rain.svg';
import SvgHumidity from '../assets/icons/icon_humidity.svg';
import SvgWind from '../assets/icons/icon_wind.svg';

type Props = {
  navigation: NavigationContainerRef<ParamListBase>;
}


/**
 * component definition
 * @returns ReactNode
 */
const HomeScreen: React.FunctionComponent<Props> = ({navigation}: Props) => {
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={tw`h-full bg-screenBackground flex-1 items-center px-10`}>
      <View style={tw`w-full py-1 flex-row items-center justify-center bg-greenBackLayer rounded-md mt-1`}>
        <Text style={tw`text-sm text-green`}>Good Morning,</Text>
        <Text style={tw`text-base text-green font-RalewaySemiBold`}> Steve</Text>
      </View>
      
      <View style={tw`w-full flex-row items-center justify-center mt-4`}>
        <HomeCategory text="My Farm"
          onPress={() => {
            navigation.navigate('appStack')
          }}
          blRound={true} style={tw`mr-2`}
        >
          <SvgFarm width={40} height={40}/>
        </HomeCategory>

        <HomeCategory text="Shop"
          onPress={() => {
            navigation.navigate('appStack', {screen: 'Shop'})
          }}
          blRound={false}
        >
          <SvgShop width={40} height={40}/>
        </HomeCategory>
      </View>


      <View style={tw`w-full flex-row items-center justify-center mt-3`}>
        <HomeCategory text="Financial Service"
           onPress={() => {
            navigation.navigate('appStack', {screen: 'Financial Services'})
          }}
          blRound={true} style={tw`mr-2`}
        >
          <SvgFinancialService width={40} height={40}/>
        </HomeCategory>

        <HomeCategory text="Training"
          onPress={() => {
            navigation.navigate('appStack', {screen: 'Training'})
          }}
          blRound={false}
        >
          <SvgTraining width={40} height={40}/>
        </HomeCategory>
      </View>


      <View style={tw`w-full flex-row items-center justify-center mt-3`}>
        <HomeCategory text="AgriCultural Support"
            onPress={() => {
              navigation.navigate('appStack', {screen: 'Agri Cultural Support'})
            }}
            blRound={true} style={tw`mr-2`}
          >
          <SvgAgriCulSupport width={40} height={40}/>
        </HomeCategory>

        <HomeCategory text="Customer Support"
          onPress={() => {
            navigation.navigate('appStack', {screen: 'Customer Support'})
          }}
          blRound={false}
        >
          <SvgCusSupport width={40} height={40}/>
        </HomeCategory>
      </View>


      <View style={tw`absolute w-[150px] h-[180px] bg-greenLight bottom-0 left-0 flex-1 items-center justify-center rounded-tr-3xl`}>
        <View style={tw`flex-1 items-center justify-center`}>
          <Text style={tw`text-2xl text-white font-RalewaySemiBold`}>
            34
            <Text style={tw`text-2xl`}>°C</Text>
          </Text>
          <Text style={tw`text-base text-white font-RalewayMedium mr-4`}>MAX</Text>
          <Text style={tw`text-2xl text-white font-RalewaySemiBold mt-2`}>
            24
            <Text style={tw`text-2xl`}>°C</Text>
          </Text>
          <Text style={tw`text-base text-white font-RalewayMedium mr-4`}>MIN</Text>
        </View>
      </View>


      <View style={tw`absolute w-[150px] h-[180px] bg-greenDark bottom-0 right-0 flex-1 items-center justify-center rounded-tl-3xl`}>
        <View style={tw`flex flex-row items-center justify-center mb-2`}>
          <View style={tw`w-10 h-10 rounded-[20px] bg-white items-center justify-center`}>
            <SvgRain width={22} height={22} />
          </View>
          <View style={tw`basis-1/2 items-start justify-start ml-2`}>
            <Text style={tw`text-sm text-white font-RalewaySemiBold`}>No Rain</Text>
            <Text style={tw`text-sm text-white opacity-60 font-RalewaySemiBold`}>Rain</Text>
          </View>
        </View>
        <View style={tw`flex flex-row items-center justify-center mb-2`}>
          <View style={tw`w-10 h-10 rounded-[20px] bg-white items-center justify-center`}>
            <SvgHumidity width={22} height={22} />
          </View>
          <View style={tw`basis-1/2 items-start justify-start ml-2`}>
            <Text style={tw`text-sm text-white font-RalewaySemiBold`}>43%</Text>
            <Text style={tw`text-sm text-white opacity-60 font-RalewaySemiBold`}>Humidity</Text>
          </View>
        </View>
        <View style={tw`flex flex-row items-center justify-center`}>
          <View style={tw`w-10 h-10 rounded-[20px] bg-white items-center justify-center`}>
            <SvgWind width={20} height={20} />
          </View>
          <View style={tw`basis-1/2 items-start justify-start ml-2`}>
            <Text style={tw`text-sm text-white font-RalewaySemiBold`}>9.4 km/hr</Text>
            <Text style={tw`text-sm text-white opacity-60 font-RalewaySemiBold`}>Wind</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
