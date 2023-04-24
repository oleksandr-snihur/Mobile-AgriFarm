import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import tw from '../helpers/tailwind';
import { View, ImageBackground, Text, Image, StyleSheet } from 'react-native';


/**
 * component definition
 * @returns ReactNode
 */
const HomeScreen: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={tw`h-full bg-screenBackground flex-1`}>
      <View style={tw.style(`items-center px-10 flex-1`)}>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default HomeScreen;
