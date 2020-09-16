import React from 'react';
import {LinearGradient} from "expo-linear-gradient";
import {View} from "react-native";

const TabIndicator = ({route}) => {
    let offsetLeft;

    if (!route.getTabWidth()) {
        return null;
    }

    if (!route.navigationState.index) {
        offsetLeft = route.navigationState.index * route.getTabWidth() + 20
    } else {
        offsetLeft = route.navigationState.index * route.getTabWidth() + 15
    }

    return (
        <View style={{
            left: offsetLeft,
            top: 43
        }}>
            <LinearGradient
                colors={['#3C4CAD', '#00C3FF', '#F04393']}
                locations={['-37.36', '107.72', '107.73']}
                start={[0.9, 0.0]}
                end={[0.9, 1.0]}
                style={{
                    width: 147.5,
                    height: 3,
                    borderRadius: 2
                }}
            />
        </View>
    )
};

export default TabIndicator;