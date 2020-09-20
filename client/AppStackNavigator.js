import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from "react-navigation-stack";

import {FlightDetailsScreen, FlightsListScreen} from "./src/screens";
import {ScreenTitle} from "./src/components";

const AppStackNavigator = createStackNavigator(
    {
        FlightsList: {
            screen: FlightsListScreen,
            navigationOptions: ({navigation}) => ({
                headerStyle: {
                    height: 85,
                    backgroundColor: "white",
                    elevation: 0,
                    shadowOpacity: 0
                },
                headerTitle: () => <ScreenTitle/>,
                headerTitleAlign: 'center'
            })
        },
        FlightDetails: {
            screen: FlightDetailsScreen,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        }
    },
    {
        initialRouteName: 'FlightsList'
    }
);

export default AppStackNavigator;

