import React, {useState, useEffect} from 'react';
import {View, Image} from "react-native";
import {Asset} from "expo-asset";
import {AppLoading} from 'expo';

import tabIndicatorIcon from '../../assets/icons/flights-list-tab-indicator.png'

const TabIndicator = ({route}) => {
    const [iconLoaded, setIconLoaded] = useState(false);
    let offsetLeft;

    useEffect(() => {
        loadIconAsync()
    }, []);


    const loadIconAsync = async () => {
        await Asset.loadAsync(tabIndicatorIcon);
        setIconLoaded(true)
    };

    if (!route.getTabWidth()) {
        return null;
    }

    if (!route.navigationState.index) {
        offsetLeft = route.navigationState.index * route.getTabWidth() + 20
    } else {
        offsetLeft = route.navigationState.index * route.getTabWidth() + 14
    }

    return (
        <>
            {iconLoaded
                ? (<View style={{
                        left: offsetLeft,
                        top: 43
                    }}>
                        <Image source={tabIndicatorIcon}/>
                    </View>)
                : <AppLoading/>
            }
        </>
    )
};

export default TabIndicator;