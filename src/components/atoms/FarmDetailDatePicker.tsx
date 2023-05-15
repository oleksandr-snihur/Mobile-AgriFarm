import React, {useState} from 'react';
import { View } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Text } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

import SvgIconCalendar from '../../assets/icons/icon_calendar.svg';
import tw from '../../helpers/tailwind'

type Props = {
  onChange: (event: DateTimePickerEvent, selectedDate: Date) => void;
}


/**
 * component definition
 * @returns ReactNode
 */
const FarmDetailDatePicker: React.FunctionComponent<Props> = ({onChange}) => {
  
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onDateChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
    if(!!selectedDate) {
      const currentDate = selectedDate;
      setShow(false);
      setDate(currentDate);
    }
  };

  return (
    <View style={tw`flex flex-row items-end justify-end p-3 bg-[#F4F4F4] rounded-lg mb-2 mr-5`}>
      {date.toLocaleDateString('en-US') === new Date().toLocaleDateString('en-US') ?
        <Text style={tw`text-base font-RalewaySemiBold text-black`}>Today</Text>
        :
        <Text style={tw`text-base font-RalewaySemiBold text-black`}>{date.toLocaleDateString('en-US')}</Text>
      }
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          setShow(true);
        }}
        style={tw`ml-6`}
      >
        <SvgIconCalendar width={24} height={24} />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={date}
          onChange={(e, selDate) => onDateChange(e, selDate)}
        />
      )}
    </View>
  );
};

export default FarmDetailDatePicker;
