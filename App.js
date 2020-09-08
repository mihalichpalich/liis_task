import React from 'react';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import {FlightsListScreen, FlightsDetailsScreen} from './screens';

const AppNavigator = createStackNavigator(
    {
        FlightsList: {
          screen: FlightsListScreen
        },
        FlightsDetails: {
          screen: FlightsDetailsScreen
        }
    },
    {
        initialRouteName: 'FlightsList'
    }
);

export default createAppContainer(AppNavigator);
