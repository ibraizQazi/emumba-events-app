import * as React from "react";
import {
    Text,
    View,
    SafeAreaView,
    FlatList,
} from 'react-native';
import { Button } from 'react-native-elements';
import { Calendar } from 'react-native-calendars';

//   export interface Props {
//     name: string;
//     date?: string;
//   }

const EventsCalendarScreen: React.FC = ({ navigation }) => {
    const onDateSelected = (date) => {
        console.log('selected date: ', date);
    };
    return (
        <SafeAreaView style={{
            flex: 1,
            paddingTop: 22
        }}>
            <View style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                <Text>EventsCalendarScreen!</Text>
                <Button
                    title="+Create Events"
                    type="clear"
                    titleStyle={{
                        // color: '#FFA325',
                        fontSize: 18,
                    }}
                    onPress={() => {
                        navigation.navigate('CreateEvent');
                    }}>
                </Button>
            </View>
            <Calendar
                current={new Date()}
                monthFormat="MMMM yyyy"
                onDayPress={onDateSelected}
            // hideExtraDays={true}
            // hideDayNames={true}
            />


        </SafeAreaView>
    );
};

export default EventsCalendarScreen;