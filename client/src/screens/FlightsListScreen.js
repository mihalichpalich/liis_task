import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {TabIndicator} from "../components";
import {FlightsListBrowse, FlightsListFavourites} from "../tabs";

const Tab = createMaterialTopTabNavigator();

const FlightsListScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="Favourites"
            tabBarOptions={{
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
            }}
        >
            <Tab.Screen name="Favourites" component={FlightsListFavourites} />
            <Tab.Screen name="Browse" component={FlightsListBrowse} />
        </Tab.Navigator>
    );
};

export default FlightsListScreen;