import React from 'react';
import {View, Image} from "react-native";

import tabIndicatorIcon from '../../assets/icons/flights-list-tab-indicator.png'

const TabIndicator = ({route}) => {
    let offsetLeft;

    if (!route.getTabWidth()) {
        return null;
    }

    if (!route.navigationState.index) {
        offsetLeft = route.navigationState.index * route.getTabWidth() + 20
    } else {
        offsetLeft = route.navigationState.index * route.getTabWidth() + 14
    }

    return (
        <View style={{
            left: offsetLeft,
            top: 43
        }}>
            <Image source={tabIndicatorIcon}/>
        </View>
    )
};

export default TabIndicator;