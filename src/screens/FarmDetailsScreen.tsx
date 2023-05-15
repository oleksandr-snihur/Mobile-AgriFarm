import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/FontAwesome';

import FarmDetailRefil from '../components/atoms/FarmDetailRefil';
import FarmDetailOptimal from '../components/atoms/FarmDetailOptimal';
import FarmDetailHigh from '../components/atoms/FarmDetailHigh';

import tw from '../helpers/tailwind';
import SvgTomato from '../assets/images/tomato.svg';
import FarmDetailDatePicker from '../components/atoms/FarmDetailDatePicker';


type Props = {
  navigation: NavigationProp<Record<string, unknown>>;
}


/**
 * component definition
 * @returns ReactNode
 */
const FarmerFaqScreen: React.FunctionComponent<Props> = ({navigation}: Props) => {
  useEffect(() => {}, []);

  const [ activeSections, setActiveSections ] = useState<number[]>([]);

  const sections = [
    {
      title: 'Soil Moisture Level',
      content: (
        <View style={tw`flex flex-1 w-full`}>
          <View style={tw`flex items-end justify-end`}>
            <FarmDetailDatePicker onChange={(event, selectedDate) => {}}/>
          </View>
          <View style={tw`flex flex-row`}>
            <View style={tw`flex-1 basis-1/3 items-center justify-center`}>
              <FarmDetailRefil numFields={12} />
            </View>
            <View style={tw`flex-1 basis-1/3 items-center justify-center`}>
              <FarmDetailOptimal numFields={22} />
            </View>
            <View style={tw`flex-1 basis-1/3 items-center justify-center`}>
              <FarmDetailHigh numFields={42} />
            </View>
          </View>
        </View>
      ),
      icon: require('../assets/farm-detail/soil-moisture-level.png'),
      height: 270
    },
    {
      title: 'Soil Health Report ',
      content: <Text style={tw`text-base`}>
        The costs are calculated according to the amount of time involved and the quality requirements.
        These vary from project to project.
      </Text>,
      icon: require('../assets/farm-detail/soil-health-report.png'),
      height: 100
    },
    {
      title: 'Weather Forecast',
      content: <Text style={tw`text-base`}>
        The costs are calculated according to the amount of time involved and the quality requirements.
        These vary from project to project.
      </Text>,
      icon: require('../assets/farm-detail/weather-forecast.png'),
      height: 100
    },
    {
      title: 'LSWI',
      content: <Text style={tw`text-base`}>
        The costs are calculated according to the amount of time involved and the quality requirements.
        These vary from project to project.
      </Text>,
      icon: require('../assets/farm-detail/lswi.png'),
      height: 100
    },
    {
      title: 'NDVI',
      content: <Text style={tw`text-base`}>
        The costs are calculated according to the amount of time involved and the quality requirements.
        These vary from project to project.
      </Text>,
      icon: require('../assets/farm-detail/ndvi.png'),
      height: 100
    },
    {
      title: 'Crop Calender',
      content: <Text style={tw`text-base`}>
        The costs are calculated according to the amount of time involved and the quality requirements.
        These vary from project to project.
      </Text>,
      icon: require('../assets/farm-detail/crop-calendar.png'),
      height: 100
    }
  ];

  function renderHeader(section: {icon: ImageSourcePropType, title: string, content: React.ReactNode}, idx: number, isActive: boolean) {
    return (
        <View
          style={tw.style(`bg-white p-1`, {
            flex: 1,
            flexDirection: 'row',
            justifyContent:'space-between',
            borderRadius: 8,
            borderBottomLeftRadius : isActive ? 0 : 8,
            borderBottomRightRadius : isActive ? 0 : 8,
            borderBottomWidth: isActive ? 1 : 0,
            borderBottomColor: "#eeeeee"
          })}
        >
          <View style={tw`flex flex-row items-center justify-center`}>
            <View style={tw`flex justify-center`}>
              <Image source={section.icon} style={tw`w-12 h-12`} />
            </View>
            <Text style={tw`text-base font-RalewaySemiBold text-black ml-2`}>{ section.title }</Text>
          </View>
          <View style={tw`flex-none items-center justify-center`}>
            <Icon name={isActive ? 'chevron-up' : 'chevron-down'} size={16} color="#B3B3B3" />
          </View>
        </View>
    );
  };

  function renderContent(section: {icon: React.ReactNode, title: string, content: React.ReactNode, height: number}, idx: number, isActive: boolean) {
    return (
      <View 
        style={tw.style(`p-2 bg-white`, {
          borderRadius: 8,
          borderTopLeftRadius : isActive ? 0 : 8,
          borderTopRightRadius : isActive ? 0 : 8,
          height: section.height
        })}
      >
        {section.content}
      </View>
    );
  }
  
  return (
    <SafeAreaView style={tw`h-full flex-1 px-[1rem]`}>
      <ScrollView showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior="automatic">
        <View style={tw`flex-1 w-full`}>
          <View style={tw`flex-1 items-center justify-center mx-4`}>
            <SvgTomato width={150} height={150} />
          </View>
          
          <Accordion
            align="bottom"
            sections={sections}
            easing="linear"
            duration={200}
            activeSections={activeSections}
            touchableComponent={TouchableOpacity}
            touchableProps={{activeOpacity: 0.7}}
            expandMultiple
            renderHeader={renderHeader}
            renderContent={renderContent}
            onChange={(sections) => setActiveSections(sections)}
            sectionContainerStyle={tw`mb-2 border border-greyLight rounded-lg`}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FarmerFaqScreen;
