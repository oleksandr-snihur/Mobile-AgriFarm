import React, { useEffect, useState } from 'react';
import { ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { SafeAreaView } from 'react-native-safe-area-context';

import tw from '../helpers/tailwind';
import TrainingCategory from '../components/molecules/TrainingCategory';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  navigation: NavigationProp<Record<string, unknown>>;
}


/**
 * component definition
 * @returns ReactNode
 */
const TrainingScreen: React.FunctionComponent<Props> = ({navigation}: Props) => {
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={tw`h-full bg-screenBackground flex-1 px-[1rem]`}>
      <ScrollView style={tw`flex-1`} showsVerticalScrollIndicator={false}>
        <View style={tw`flex w-full mt-[1rem] h-6/7`}>
          <TrainingCategory imgSrc="" title="Amazing Agriculture Technology, Plant and Harvest ..." view={450}/>
          <TrainingCategory imgSrc="" title="World Modern Agriculture Technology" view={890}/>
          <TrainingCategory imgSrc="" title="Garlic, Red beet, Bitter Melon Cultivation Farming" view={744}/>
          <TrainingCategory imgSrc="" title="Amazing Agriculture Technology, Plant and Harvest ..." view={642}/>
          <TrainingCategory imgSrc="" title="Amazing Agriculture Technology" view={558}/>
          <TrainingCategory imgSrc="" title="Advanced Agriculture Planting Technology" view={130}/>
          <TrainingCategory imgSrc="" title="Building a new future for agriculture with technology" view={478}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TrainingScreen;
