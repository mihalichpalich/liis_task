import React from 'react';
import {Text} from "react-native";

const FlightDetailsScreen = () => {
    return (
        <Text>Flight Details Screen</Text>
    );
};

FlightDetailsScreen.navigationOptions = {
    title: 'Flight Details',
    headerTintColor: '#000000',
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0
    }
};

export default FlightDetailsScreen;