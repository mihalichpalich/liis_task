import React, {useState, useEffect} from 'react';
import {Text} from "react-native";
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

const FlightsListScreen = () => {
    const [fontsLoaded] = useFonts({
        'SF Pro Text': require('../assets/fonts/SFProText.otf')
    });

    if (!fontsLoaded) {
        return <AppLoading/>
    } else {
        return (
            <Text style={{fontWeight: '300', fontFamily: 'SF Pro Text'}}>Flights List Screen</Text>
        );
    }

};

FlightsListScreen.navigationOptions = () => ({
    title: 'Flights',
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0
    },
    headerTitleStyle: {
        marginTop: 10,
        marginBottom: 10,
        color: '#000000',
        fontWeight: '600',
        fontSize: 17,
        lineHeight: 22
    },
    headerTitleAlign: 'center'
});

export default FlightsListScreen;