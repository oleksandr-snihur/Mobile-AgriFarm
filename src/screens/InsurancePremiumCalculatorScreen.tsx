import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, StatusBar } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import DropDownPicker from 'react-native-dropdown-picker';
import { NavigationProp } from '@react-navigation/native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useHeaderHeight } from '@react-navigation/elements';
import { metrics } from '../theme/metrics';

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

  const headerHeight = useHeaderHeight();
  const statusBarHeight = StatusBar.currentHeight ?? 0;

  const [openSeason, setOpenSeason] = useState(false);
  const [valueSeason, setValueSeason] = useState(null);

  const [openYear, setOpenYear] = useState(false);
  const [valueYear, setValueYear] = useState(null);

  const [openScheme, setOpenScheme] = useState(false);
  const [valueScheme, setValueScheme] = useState(null);

  const [openDistrict, setOpenDistrict] = useState(false);
  const [valueDistrict, setValueDistrict] = useState(null);

  const [openCrop, setOpenCrop] = useState(false);
  const [valueCrop, setValueCrop] = useState(null);

  const [area, setArea] = useState("");
  
  return (
    <SafeAreaView style={tw`h-full bg-screenBackground flex-1 px-[1.5rem]`}>
      <ScrollView showsVerticalScrollIndicator={false} style={tw`flex-1`}>
        <View style={tw.style(`flex-1 w-full items-start justify-start`, {height: (metrics.screenHeight - headerHeight - statusBarHeight)})}>
          <View style={tw`flex w-full mt-4`}>
            <Text style={tw`text-green font-RalewaySemiBold`}>Season</Text>
          </View>
          <View style={tw`flex w-full mt-1 z-50`}>
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
              listMode='SCROLLVIEW'
            />
          </View>

          <View  style={tw`flex w-full z-40 mt-4`}>
            <Text style={tw`text-green font-RalewaySemiBold`}>Year</Text>
          </View>
          <View style={tw`flex w-full mt-1 z-40`}>
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
              listMode='SCROLLVIEW'
            />
          </View>

          <View  style={tw`flex w-full z-30 mt-4`}>
            <Text style={tw`text-green font-RalewaySemiBold`}>Scheme</Text>
          </View>
          <View style={tw`flex w-full mt-1 z-30`}>
            <DropDownPicker
              open={openScheme}
              value={valueScheme}
              items={[
                {label: 'Scheme1', value: 'Scheme1'},
                {label: 'Scheme2', value: 'Scheme2'}
              ]}
              setOpen={setOpenScheme}
              setValue={setValueScheme}
              placeholder='select'
              listMode='SCROLLVIEW'
            />
          </View>

          <View  style={tw`flex w-full z-20 mt-4`}>
            <Text style={tw`text-green font-RalewaySemiBold`}>District</Text>
          </View>
          <View style={tw`flex w-full mt-1 z-20`}>
            <DropDownPicker
              open={openDistrict}
              value={valueDistrict}
              items={[
                {label: 'District1', value: 'District1'},
                {label: 'District2', value: 'District2'}
              ]}
              setOpen={setOpenDistrict}
              setValue={setValueDistrict}
              placeholder='select'
              listMode='SCROLLVIEW'
            />
          </View>

          <View  style={tw`flex w-full z-10 mt-4`}>
            <Text style={tw`text-green font-RalewaySemiBold`}>Crop</Text>
          </View>
          <View style={tw`flex w-full mt-1 z-10`}>
            <DropDownPicker
              open={openCrop}
              value={valueCrop}
              items={[
                {label: 'Crop1', value: 'Crop1'},
                {label: 'Crop2', value: 'Crop2'}
              ]}
              setOpen={setOpenCrop}
              setValue={setValueCrop}
              placeholder='select'
              dropDownDirection="BOTTOM"
              listMode='SCROLLVIEW'
            />
          </View>

          <View  style={tw`flex w-full z-9 mt-4`}>
            <Text style={tw`text-green font-RalewaySemiBold`}>Area (Hect.)</Text>
          </View>
          <View style={tw`flex w-full mt-1 z-9`}>
            <TextInput
              value={area}
              mode="outlined"
              returnKeyType="next"
              autoCapitalize="none"
              onChangeText={(text) => setArea(text)}
              style={tw`w-full h-10 rounded-md border-l-grey`}
            />
          </View>

          <View style={tw`flex flex-row w-full mt-4`}>
            <View style={tw`flex-1`}>
              <Button mode="outlined" style={tw`w-full rounded-md`} labelStyle={tw`text-lg text-black`} elevation={5}>Reset</Button>
            </View>
            <View style={tw`flex-1 ml-5`}>
              <Button mode="contained" style={tw.style(`w-full rounded-md`)} labelStyle={tw`text-lg`} elevation={5}>Submit</Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InsurancePremiumCalculatorScreen;
