import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {ScreenTitle} from "./src/components";
import {FlightsListScreen, FlightDetailsScreen} from "./src/screens";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="FlightsList">
                <Stack.Screen name="FlightsList" component={FlightsListScreen} options={{
                    headerStyle: {
                        height: 85,
                        backgroundColor: "white",
                        elevation: 0,
                        shadowOpacity: 0
                    },
                    headerTitle: () => <ScreenTitle/>,
                    headerTitleAlign: 'center'
                }}/>
                <Stack.Screen name="FlightDetails" options={{
                    headerShown: false
                }} component={FlightDetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default AppNavigator;