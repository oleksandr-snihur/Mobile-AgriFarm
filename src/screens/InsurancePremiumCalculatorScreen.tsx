import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { NavigationProp } from '@react-navigation/native';

import { SafeAreaView } from 'react-native-safe-area-context';

import tw from '../helpers/tailwind';

type Props = {
  navigation: NavigationProp<Record<string, unknown>>;
}


/**
 * component definition
 * @returns ReactNode
 */
const InsurancePremiumCalculatorScreen: React.FunctionComponent<Props> = ({navigation}: Props) => {

  useEffect(() => {}, []);

  const [openSeason, setOpenSeason] = useState(false);
  const [valueSeason, setValueSeason] = useState(null);

  const [openYear, setOpenYear] = useState(false);
  const [valueYear, setValueYear] = useState(null);

  return (
    <SafeAreaView style={tw`h-1/1 bg-screenBackground flex-1 px-[1.5rem]`}>
        <View style={tw`w-full h-full`}>
          <View style={tw`items-start justify-start mt-[1rem]`}>
              <Text style={tw`text-green font-RalewaySemiBold`}>Season</Text>
              <DropDownPicker
                open={openSeason}
                value={valueSeason}
                items={[
                  {label: 'Kharif', value: 'Kharif'},
                  {label: 'Kharif1', value: 'Kharif1'}
                ]}
                setOpen={setOpenSeason}
                setValue={setValueSeason}
                placeholder='select'
                containerStyle={{ height: 40 }}
                zIndex={3000}
                zIndexInverse={1000}
                style={tw`mt-[0.5rem]`}
              />
          </View>

          {/* <View style={tw`w-full mt-[1rem] z-10`}>
            <View>
              <Text style={tw`text-green font-RalewaySemiBold`}>Year</Text>
            </View>
            <View>
              <DropDownPicker
                open={openYear}
                value={valueYear}
                items={[
                  {label: '2018', value: '2018'},
                  {label: '2019', value: '2019'}
                ]}
                setOpen={setOpenYear}
                setValue={setValueYear}
                placeholder='select'
                zIndex={1000}
              zIndexInverse={3000}
                style={tw`mt-[0.5rem]`}
              />
            </View>
          </View> */}
        </View>
    </SafeAreaView>
  );
};

export default InsurancePremiumCalculatorScreen;
