import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import Accordion from 'react-native-collapsible/Accordion';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

import tw from '../helpers/tailwind';
import SvgFarmerFaq from '../assets/images/farmer_faq.svg';


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
      title: 'What is Insurance?',
      content: <Text style={tw`text-base`}>
        The costs are calculated according to the amount of time involved and the quality requirements.
        These vary from project to project. Therefore, per project, you will receive an individual offer on demand.
      </Text>
    },
    {
      title: 'What is crop insurance?',
      content: <Text style={tw`text-base`}>
        The costs are calculated according to the amount of time involved and the quality requirements.
        These vary from project to project.
      </Text>
    },
    {
      title: 'Objectives?',
      content: <Text style={tw`text-base`}>
        The costs are calculated according to the amount of time involved and the quality requirements.
        These vary from project to project.
      </Text>
    },
    {
      title: 'What Is weather based crop insurance?',
      content: <Text style={tw`text-base`}>
        The costs are calculated according to the amount of time involved and the quality requirements.
        These vary from project to project.
      </Text>
    },
    {
      title: 'How many coverage of crops?',
      content: <Text style={tw`text-base`}>
        The costs are calculated according to the amount of time involved and the quality requirements.
        These vary from project to project.
      </Text>
    },
    {
      title: 'What are sum insured/coverage Limit?',
      content: <Text style={tw`text-base`}>
        The costs are calculated according to the amount of time involved and the quality requirements.
        These vary from project to project.
      </Text>
    },
    {
      title: 'Last date for crop Insurance kharif season',
      content: <Text style={tw`text-base`}>
        The costs are calculated according to the amount of time involved and the quality requirements.
        These vary from project to project.
      </Text>
    },
  ];

  function renderHeader(section: {content: React.ReactNode, title: string}, idx: number, isActive: boolean) {
    return (
        <View
          style={tw.style(`bg-white p-3`, {
            flex: 1,
            flexDirection: 'row',
            justifyContent:'space-between',
            borderRadius: 8,
            borderBottomLeftRadius : isActive ? 0 : 8,
            borderBottomRightRadius : isActive ? 0 : 8,
          })}
        >
          <Text style={tw`text-base font-RalewaySemiBold text-black`}>{ section.title }</Text>
          <Icon name={isActive ? 'chevron-up' : 'chevron-down'} size={16} color="#000" />
        </View>
    );
  };

  function renderContent(section: {content: React.ReactNode, title: string}, idx: number, isActive: boolean) {
    return (
      <View
        style={tw.style(`p-3 bg-white`,
          {
            borderRadius: 8,
            borderTopLeftRadius : isActive ? 0 : 8,
            borderTopRightRadius : isActive ? 0 : 8,
          }
        )}
      >
        {section.content}
      </View>
    );
  }
  
  return (
    <SafeAreaView style={tw`h-full bg-screenBackground flex-1 px-[1rem]`}>
      <ScrollView showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior="automatic">
        <View style={tw`flex-1 w-full`}>
          <View style={tw`flex-1 items-center justify-center mt-6 mb-4`}>
            <SvgFarmerFaq width={150} height={150} />
            <Text style={tw`text-black font-RalewaySemiBold mt-2`}>Frequently asked question</Text>
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
