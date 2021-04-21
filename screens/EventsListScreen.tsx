import * as React from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Pressable,
    Dimensions,
} from 'react-native';
import * as SQLite from 'expo-sqlite';
import { Button, Overlay } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
//   export interface Props {
//     name: string;
//     date?: string;
//   }
const db = SQLite.openDatabase('db.db');

const EventsListScreen: React.FC = ({ navigation }) => {
    const [eventType, setEventType] = React.useState();
    const [events, setEvents] = React.useState([]);
    const fetchData = () => {
        db.transaction(tx => {
            // sending 4 arguments in executeSql
            tx.executeSql('SELECT * FROM events', [null], // passing sql query and parameters:null
                // success callback which sends two things Transaction object and ResultSet Object
                (txObj, { rows: { _array } }) => {
                    console.log('events :', _array);
                    setEvents(_array);
                },
                // failure callback which sends two things Transaction object and Error
                (txObj, error) => console.log('Error ', error)
            ); // end executeSQL
        }) // end transaction
    };

    const deleteEvent = (id) => {
        db.transaction(tx => {
            tx.executeSql('DELETE FROM items WHERE id = ? ', [id],
                (txObj, resultSet) => {
                    if (resultSet.rowsAffected > 0) {
                        let newList = events.filter(data => {
                            if (data.id === id)
                                return false
                            else
                                return true
                        })
                        setEvents(newList)
                    }
                })
        })
    }

    React.useEffect(() => {
        fetchData();
    }, [])

    return (
        <SafeAreaView style={{
            flex: 1,
            paddingTop: 22
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
            }}>
                <DropDownPicker
                    items={[
                        { label: 'All', value: 'all' },
                        { label: 'Event', value: 'event' },
                        { label: 'Out of Office', value: 'outofoffice' },
                        { label: 'Task', value: 'task' }
                    ]}
                    defaultValue={eventType}
                    containerStyle={{ height: 40 }}
                    style={{
                        height: 50, width: 140,
                        borderColor: 'black', borderWidth: 1, backgroundColor: '#fafafa'
                    }}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                    onChangeItem={item => setEventType(item)}
                />

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
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>EventsListScreen!</Text>
            </View>
        </SafeAreaView>
    );
};

export default EventsListScreen;