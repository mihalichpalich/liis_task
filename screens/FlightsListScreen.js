import React from 'react';
import {Text} from "react-native";

const FlightsListScreen = () => {
    return (
        <Text>Flights List Screen</Text>
    );
};

FlightsListScreen.navigationOptions = {
    title: 'Flights',
    headerTintColor: '#000000',
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0
    }
};

export default FlightsListScreen;