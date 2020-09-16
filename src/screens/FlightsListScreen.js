import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import {FlightsListBrowse, FlightsListFavourites} from "../tabs";
import {TabIndicator} from "../components";

const FlightsListScreen = createMaterialTopTabNavigator(
    {
        Favourites: {
            screen: FlightsListFavourites
        },
        Browse: {
            screen: FlightsListBrowse
        }
    },
    {
        tabBarOptions: {
            style: {
                backgroundColor: "white",
                shadowRadius: 3.5,
                elevation: 4
            },
            labelStyle: {
                fontFamily: "SF Pro Text Semibold",
                fontSize: 17,
                lineHeight: 22,
                letterSpacing: -0.408,
                color: '#000000',
                textTransform: 'capitalize'
            },
            renderIndicator: (route) => <TabIndicator route={route}/>
        },
    }
);

export default FlightsListScreen;