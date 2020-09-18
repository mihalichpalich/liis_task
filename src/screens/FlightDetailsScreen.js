import React, {useState}from 'react';
import styled from "styled-components";
import {View, ScrollView} from "react-native";
import Carousel from 'react-native-snap-carousel';

import flightDetailsScreenBackgroundImage from '../../assets/images/flight-details-screen-background.png';
import flightDetailsScreenHighlightedBG from '../../assets/images/flight-details-screen-highlighted-bg.png';
import arrow from '../../assets/icons/flight-details-screen-arrow.png';
import likeNotActive from "../../assets/icons/flights-item-like-not-active.png";
import likeActive from "../../assets/icons/flights-item-like-active.png";
import carouselImage1 from '../../assets/images/carousel/flight-details-screen-carousel-1.jpg';
import carouselImage2 from '../../assets/images/carousel/flight-details-screen-carousel-2.jpg';

const images = [{src: carouselImage1}, {src: carouselImage2}];

const FlightDetailsScreen = () => {
    const [like, setLike] = useState(false);

    const onLikeChange = () => {
        setLike(prevState => !prevState)
    };

    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <FlightDetailsScreenBackground source={flightDetailsScreenBackgroundImage}/>

                <FlightDetailsScreenInfoWrapper>
                    <FlightDetailsScreenFlightInfo>
                        <FlightDetailsScreenDirection>
                            <View>
                                <FlightDetailsScreenDirectionSmall>1 Aug, 2020</FlightDetailsScreenDirectionSmall>
                                <FlightDetailsScreenDirectionLarge>SVO</FlightDetailsScreenDirectionLarge>
                                <FlightDetailsScreenDirectionSmall>Moscow</FlightDetailsScreenDirectionSmall>
                            </View>

                            <FlightDetailsScreenDirectionArrow source={arrow}/>

                            <View>
                                <FlightDetailsScreenDirectionSmall>11:45</FlightDetailsScreenDirectionSmall>
                                <FlightDetailsScreenDirectionLarge>JFK</FlightDetailsScreenDirectionLarge>
                                <FlightDetailsScreenDirectionSmall>New York City</FlightDetailsScreenDirectionSmall>
                            </View>

                            <FlightDetailsScreenLikeWrapper onPress={onLikeChange}>
                                <FlightDetailsScreenLike source={!like ? likeNotActive : likeActive}/>
                            </FlightDetailsScreenLikeWrapper>
                        </FlightDetailsScreenDirection>

                        <FlightDetailsScreenHighlighted source={flightDetailsScreenHighlightedBG}>
                            <FlightDetailsScreenHighlightedItem>
                                <FlightDetailsScreenHighlightedTitle>Price</FlightDetailsScreenHighlightedTitle>
                                <FlightDetailsScreenHighlightedValue>23 311 ₽</FlightDetailsScreenHighlightedValue>
                            </FlightDetailsScreenHighlightedItem>

                            <FlightDetailsScreenHighlightedSeparator></FlightDetailsScreenHighlightedSeparator>

                            <FlightDetailsScreenHighlightedItem>
                                <FlightDetailsScreenHighlightedTitle>Boarding</FlightDetailsScreenHighlightedTitle>
                                <FlightDetailsScreenHighlightedValue>19:20</FlightDetailsScreenHighlightedValue>
                            </FlightDetailsScreenHighlightedItem>
                        </FlightDetailsScreenHighlighted>
                    </FlightDetailsScreenFlightInfo>

                    <Carousel
                        loop
                        inactiveSlideScale={1}
                        inactiveSlideOpacity={1}
                        data={images}
                        sliderWidth={385}
                        itemWidth={149}
                        itemHeight={200}
                        renderItem={({item, index}) => (
                            <FlightDetailsScreenCarouselImage source={item.src} key={index}/>
                        )}
                    />
                </FlightDetailsScreenInfoWrapper>
            </ScrollView>
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
    top: -53px;    
    elevation: 1;
    border-radius: 30px;
    background-color: #FFFFFF;
`;

const FlightDetailsScreenFlightInfo = styled.View`
    padding: 27px 30px 0 27px;
    margin-bottom: 18px;
`;

const FlightDetailsScreenDirection = styled.View`
    flex-direction: row;
    padding-left: 13px;
    padding-right: 14px;
    margin-bottom: 16px;
`;

const FlightDetailsScreenDirectionSmall = styled.Text`
    font-family: SF Pro Text Regular;
    font-size: 13px;
    line-height: 22px;    
    letter-spacing: -0.408px;    
    color: #878787;
`;

const FlightDetailsScreenDirectionLarge = styled.Text`
    font-family: SF Pro Text Semibold;
    font-size: 36px;
    line-height: 41px;
    letter-spacing: -0.408px;
    color: #404040;
`;

const FlightDetailsScreenDirectionArrow = styled.Image`
    margin: 32px 55px 0 53px;
`;

const FlightDetailsScreenHighlighted = styled.ImageBackground`
    flex-direction: row;
    width: 307px; 
    height: 80px;
    padding: 15px 45px;
`;

const FlightDetailsScreenHighlightedItem = styled.View`
    align-items: center;
`;

const FlightDetailsScreenHighlightedTitle = styled.Text`
    margin-bottom: 3px;
    font-family: SF Pro Text Light;
    font-size: 13px;
    line-height: 22px;    
    letter-spacing: -0.408px;    
    color: #FFFFFF;
`;

const FlightDetailsScreenHighlightedValue = styled.Text`
    font-family: SF Pro Text Semibold;
    font-size: 20px;
    line-height: 22px;
    letter-spacing: -0.408px;    
    color: #FFFFFF;
`;

const FlightDetailsScreenHighlightedSeparator = styled.View`
    width: 1px;
    height: 50px;
    margin-left: 25px;
    margin-right: 40px;
    background: #FFFFFF;
    border-radius: 2px;
`;

const FlightDetailsScreenLikeWrapper = styled.TouchableOpacity`
    position: absolute;
    right: -8px;
    top: -5px;
`;

const FlightDetailsScreenLike = styled.Image`
    width: 20px;
    height: 17px;
`;

const FlightDetailsScreenCarouselImage = styled.Image`
    width: 139px;
    height: 205px;
    border-radius: 10px;
`;

export default FlightDetailsScreen;