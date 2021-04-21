import * as React from "react";
import {
    View,
    SafeAreaView,
    Dimensions,
} from 'react-native';
import * as SQLite from 'expo-sqlite';
import { Text, Button, Input } from 'react-native-elements';
import RNDateTimePicker from '@react-native-community/datetimepicker';
//   export interface Props {
//     name: string;
//     date?: string;
//   }
const db = SQLite.openDatabase('db.db');

const CreateEventScreen: React.FC = ({ navigation }) => {
    const [eventName, setEventName] = React.useState('');
    const [eventDescription, setEventDescription] = React.useState('');
    const [date, setDate] = React.useState(new Date());
    const [startTime, setStartTime] = React.useState();
    const [endTime, setEndTime] = React.useState();
    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };
    const onStartTimeChanged = (event, selectedDate) => {
        const currentTime = selectedDate || date;
        setStartTime(currentTime);
    };
    const onEndTimeChanged = (event, selectedDate) => {
        const currentTime = selectedDate || date;
        setEndTime(currentTime);
    };
    const saveEvent = () => {
        db.transaction(tx => {
            tx.executeSql('INSERT INTO events (name, description, event_type, date, start_time, end_time) values (?, ?, ?, ?, ?, ?)', [eventName, eventDescription, 'task', new Date(), startTime, endTime],
                (txObj, resultSet) => {
                    //   setState({ data: this.state.data.concat({ id: resultSet.insertId, text: 'gibberish', count: 0 }) })
                    console.log('Data inserted :', resultSet.insertId);
                },
                (txObj, error) => console.log('Error', error))
        })
    };
    React.useEffect(() => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT, event_type TEXT, date TEXT, start_time TEXT, end_time TEXT)'
            )
        })
    }, []);
    return (
        <SafeAreaView style={{
            flex: 1,
            paddingTop: 22,
            width: '100%',
            height: '100%',
        }}>
            <View style={{
                justifyContent: 'flex-start', alignItems: 'center', width: '100%',
                height: '100%',
                padding: 10,
            }}>
                <Text>Create Event!</Text>
                <Input
                    placeholder='Name'
                    onChangeText={value => setEventName(value)}
                />
                <Input
                    placeholder='Description'
                    onChangeText={value => setEventDescription(value)}
                />
                <View style={{
                    flexDirection: 'row',
                    // padding: 4,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '400',
                        paddingEnd: 10,
                    }}>Pick Date</Text>

                    <RNDateTimePicker
                        style={{
                            // borderWidth: 1,
                            // borderColor: 'black',
                            width: '70%'
                        }}
                        value={date}
                        minimumDate={new Date()}
                        // mode='date'
                        is24Hour={true}
                        display="default"
                        onChange={onDateChange}
                    />
                </View>

                <View style={{
                    // borderWidth: 1,
                    // borderColor: 'black',

                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    padding: 10,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        // padding: 4,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '400',
                        }}>Start Time</Text>

                        <RNDateTimePicker
                            style={{
                                // borderWidth: 1,
                                // borderColor: 'red',
                                width: '40%'
                            }}
                            value={date}
                            minimumDate={new Date()}
                            mode='time'
                            is24Hour={true}
                            display="default"
                            onChange={onStartTimeChanged}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        // padding: 4,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '400',
                            paddingEnd: 10,
                        }}>End Time</Text>
                        <RNDateTimePicker
                            style={{
                                // borderWidth: 1,
                                // borderColor: 'blue',
                                width: '40%'
                            }}
                            value={date}
                            minimumDate={new Date()}
                            mode='time'
                            is24Hour={true}
                            display="default"
                            onChange={onEndTimeChanged}
                        />
                    </View>
                </View>
                <Button
                    title='Create Event'
                    titleStyle={{
                        // color: '#FFA325',
                        fontSize: 18,
                    }}
                    containerStyle={{
                        padding: 5,
                        width: '90%',
                    }}
                    onPress={saveEvent}
                />
            </View>
        </SafeAreaView>
    );
};

export default CreateEventScreen;