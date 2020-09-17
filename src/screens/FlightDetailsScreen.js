import React from 'react';
import styled from "styled-components";

import flightDetailsScreenBackgroundImage from '../../assets/images/flight-details-screen-background.png';

const FlightDetailsScreen = () => {
    return (
        <Container>
            <FlightDetailsScreenBackground source={flightDetailsScreenBackgroundImage}/>
            <FlightDetailsScreenInfoWrapper>

            </FlightDetailsScreenInfoWrapper>
        </Container>
    );
};

const Container = styled.View`
    flex: 1;
`;

const FlightDetailsScreenBackground = styled.ImageBackground`
    height: 385px;
    width: 375px;
    left: 0px;
    top: -2px;
    elevation: 0;
`;

const FlightDetailsScreenInfoWrapper = styled.View`
    height: 100%;
    top: -57px;    
    elevation: 1;
    border-radius: 25px;
    background-color: #FFFFFF;
`;

export default FlightDetailsScreen;