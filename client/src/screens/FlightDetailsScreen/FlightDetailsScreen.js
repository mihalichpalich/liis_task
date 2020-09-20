import React, {useState}from 'react';
import styled from "styled-components";
import {View, ScrollView} from "react-native";
import Carousel from 'react-native-snap-carousel';
import {connect} from 'react-redux';

import * as styles from './styles';
import flightDetailsScreenBackgroundImage from '../../../assets/images/flight-details-screen-background.jpg';
import flightDetailsScreenHighlightedBG from '../../../assets/images/flight-details-screen-highlighted-bg.png';
import arrow from '../../../assets/icons/flight-details-screen-arrow.png';
import likeNotActive from "../../../assets/icons/flights-item-like-not-active.png";
import likeActive from "../../../assets/icons/flights-item-like-active.png";
import carouselImage1 from '../../../assets/images/carousel/flight-details-screen-carousel-1.jpg';
import carouselImage2 from '../../../assets/images/carousel/flight-details-screen-carousel-2.jpg';
import {addToFavourites, removeFromFavourites, makeFavourite, makeUnfavourite} from "../../redux/actions";

const images = [{src: carouselImage1}, {src: carouselImage2}];

const FlightDetailsScreen = ({
     navigation,
     addToFavourites,
     removeFromFavourites,
     makeFavourite,
     makeUnfavourite
}) => {
    const {departure, boarding, price} = navigation.state.params;
    const [like, setLike] = useState(true);

    const onLikeChange = () => {
        if (!like) {
            setLike(true);
            addToFavourites(navigation.state.params);
            makeFavourite(navigation.state.params)
        } else {
            setLike(false);
            removeFromFavourites(navigation.state.params);
            makeUnfavourite(navigation.state.params)
        }
    };

    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <styles.FlightDetailsScreenBackground source={flightDetailsScreenBackgroundImage}/>

                <styles.FlightDetailsScreenInfoWrapper>
                    <styles.FlightDetailsScreenFlightInfo>
                        <styles.FlightDetailsScreenDirection>
                            <View>
                                <styles.FlightDetailsScreenDirectionSmall>{departure.date}</styles.FlightDetailsScreenDirectionSmall>
                                <styles.FlightDetailsScreenDirectionLarge>{departure.airport_code}</styles.FlightDetailsScreenDirectionLarge>
                                <styles.FlightDetailsScreenDirectionSmall>{departure.city}</styles.FlightDetailsScreenDirectionSmall>
                            </View>

                            <styles.FlightDetailsScreenDirectionArrow source={arrow}/>

                            <View>
                                <styles.FlightDetailsScreenDirectionSmall>{departure.time}</styles.FlightDetailsScreenDirectionSmall>
                                <styles.FlightDetailsScreenDirectionLarge>{boarding.airport_code}</styles.FlightDetailsScreenDirectionLarge>
                                <styles.FlightDetailsScreenDirectionSmall>{boarding.city}</styles.FlightDetailsScreenDirectionSmall>
                            </View>

                            <styles.FlightDetailsScreenLikeWrapper onPress={onLikeChange}>
                                <styles.FlightDetailsScreenLike source={!like ? likeNotActive : likeActive}/>
                            </styles.FlightDetailsScreenLikeWrapper>
                        </styles.FlightDetailsScreenDirection>

                        <styles.FlightDetailsScreenHighlighted source={flightDetailsScreenHighlightedBG}>
                            <styles.FlightDetailsScreenHighlightedItem>
                                <styles.FlightDetailsScreenHighlightedTitle>Price</styles.FlightDetailsScreenHighlightedTitle>
                                <styles.FlightDetailsScreenHighlightedValue>{price}</styles.FlightDetailsScreenHighlightedValue>
                            </styles.FlightDetailsScreenHighlightedItem>

                            <styles.FlightDetailsScreenHighlightedSeparator></styles.FlightDetailsScreenHighlightedSeparator>

                            <styles.FlightDetailsScreenHighlightedItem>
                                <styles.FlightDetailsScreenHighlightedTitle>Boarding</styles.FlightDetailsScreenHighlightedTitle>
                                <styles.FlightDetailsScreenHighlightedValue>{boarding.time}</styles.FlightDetailsScreenHighlightedValue>
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

const mapDispatchToProps = {
    addToFavourites,
    removeFromFavourites,
    makeFavourite,
    makeUnfavourite
};

export default connect(null, mapDispatchToProps)(FlightDetailsScreen);