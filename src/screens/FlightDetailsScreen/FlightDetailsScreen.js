import React, {useState}from 'react';
import styled from "styled-components";
import {View, ScrollView} from "react-native";
import Carousel from 'react-native-snap-carousel';

import * as styles from './styles';
import flightDetailsScreenBackgroundImage from '../../../assets/images/flight-details-screen-background.png';
import flightDetailsScreenHighlightedBG from '../../../assets/images/flight-details-screen-highlighted-bg.png';
import arrow from '../../../assets/icons/flight-details-screen-arrow.png';
import likeNotActive from "../../../assets/icons/flights-item-like-not-active.png";
import likeActive from "../../../assets/icons/flights-item-like-active.png";
import carouselImage1 from '../../../assets/images/carousel/flight-details-screen-carousel-1.jpg';
import carouselImage2 from '../../../assets/images/carousel/flight-details-screen-carousel-2.jpg';

const images = [{src: carouselImage1}, {src: carouselImage2}];

const FlightDetailsScreen = () => {
    const [like, setLike] = useState(false);

    const onLikeChange = () => {
        setLike(prevState => !prevState)
    };

    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <styles.FlightDetailsScreenBackground source={flightDetailsScreenBackgroundImage}/>

                <styles.FlightDetailsScreenInfoWrapper>
                    <styles.FlightDetailsScreenFlightInfo>
                        <styles.FlightDetailsScreenDirection>
                            <View>
                                <styles.FlightDetailsScreenDirectionSmall>1 Aug, 2020</styles.FlightDetailsScreenDirectionSmall>
                                <styles.FlightDetailsScreenDirectionLarge>SVO</styles.FlightDetailsScreenDirectionLarge>
                                <styles.FlightDetailsScreenDirectionSmall>Moscow</styles.FlightDetailsScreenDirectionSmall>
                            </View>

                            <styles.FlightDetailsScreenDirectionArrow source={arrow}/>

                            <View>
                                <styles.FlightDetailsScreenDirectionSmall>11:45</styles.FlightDetailsScreenDirectionSmall>
                                <styles.FlightDetailsScreenDirectionLarge>JFK</styles.FlightDetailsScreenDirectionLarge>
                                <styles.FlightDetailsScreenDirectionSmall>New York City</styles.FlightDetailsScreenDirectionSmall>
                            </View>

                            <styles.FlightDetailsScreenLikeWrapper onPress={onLikeChange}>
                                <styles.FlightDetailsScreenLike source={!like ? likeNotActive : likeActive}/>
                            </styles.FlightDetailsScreenLikeWrapper>
                        </styles.FlightDetailsScreenDirection>

                        <styles.FlightDetailsScreenHighlighted source={flightDetailsScreenHighlightedBG}>
                            <styles.FlightDetailsScreenHighlightedItem>
                                <styles.FlightDetailsScreenHighlightedTitle>Price</styles.FlightDetailsScreenHighlightedTitle>
                                <styles.FlightDetailsScreenHighlightedValue>23 311 ₽</styles.FlightDetailsScreenHighlightedValue>
                            </styles.FlightDetailsScreenHighlightedItem>

                            <styles.FlightDetailsScreenHighlightedSeparator></styles.FlightDetailsScreenHighlightedSeparator>

                            <styles.FlightDetailsScreenHighlightedItem>
                                <styles.FlightDetailsScreenHighlightedTitle>Boarding</styles.FlightDetailsScreenHighlightedTitle>
                                <styles.FlightDetailsScreenHighlightedValue>19:20</styles.FlightDetailsScreenHighlightedValue>
                            </styles.FlightDetailsScreenHighlightedItem>
                        </styles.FlightDetailsScreenHighlighted>
                    </styles.FlightDetailsScreenFlightInfo>

                    <Carousel
                        loop
                        inactiveSlideScale={1}
                        inactiveSlideOpacity={1}
                        data={images}
                        sliderWidth={385}
                        itemWidth={149}
                        itemHeight={200}
                        renderItem={({item, index}) => (
                            <styles.FlightDetailsScreenCarouselImage source={item.src} key={index}/>
                        )}
                    />
                </styles.FlightDetailsScreenInfoWrapper>
            </ScrollView>
        </Container>
    );
};

const Container = styled.View`
    flex: 1;
`;

export default FlightDetailsScreen;