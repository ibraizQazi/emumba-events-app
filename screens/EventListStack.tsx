import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EventsListScreen from './EventsListScreen';
import CreateEventScreen from './CreateEventScreen';

const Events = createStackNavigator();

const EventListStack: React.FC = () => {
    return (
        <Events.Navigator initialRouteName="Events" mode="modal">
            <Events.Screen
                name="Events"
                component={EventsListScreen}
                options={{ headerShown: false }}
            />
            <Events.Screen
                name="CreateEvent"
                component={CreateEventScreen}
                options={{ headerShown: false }}
            />
        </Events.Navigator>
    );
};

export default EventListStack;
