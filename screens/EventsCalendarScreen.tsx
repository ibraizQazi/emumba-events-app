import * as React from "react";
import {
    Text,
    View,
    SafeAreaView,
    Dimensions,
} from 'react-native';
import { Button } from 'react-native-elements';

//   export interface Props {
//     name: string;
//     date?: string;
//   }

const EventsCalendarScreen: React.FC = ({ navigation }) => {
    return (
        <SafeAreaView style={{
            flex: 1,
            paddingTop: 22
        }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
        </SafeAreaView>
    );
};

export default EventsCalendarScreen;