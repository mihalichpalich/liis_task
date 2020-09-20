import React from 'react';
import styled from "styled-components/native";
import {FlatList, Animated} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {FavouritesListItemAnimated} from "../components/animated";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const FlightsListFavourites = ({navigation, favouriteFlights}) => {
    const y = new Animated.Value(0);
    const onScroll = Animated.event([{nativeEvent: {contentOffset: {y}}}], {useNativeDriver: true});

    return (
        <Container>
            <AnimatedFlatList
                bounces={false}
                scrollEventThrottle={16}
                data={favouriteFlights}
                keyextractor={(item, index) => index}
                renderItem={({item, index}) => <FavouritesListItemAnimated
                    item={item}
                    y={y}
                    index={index}
                    navigate={navigation.navigate}
                />}
                showsVerticalScrollIndicator={false}
                {...{onScroll}}
            />
        </Container>
    )
};

FlightsListFavourites.defaultProps = {
    favouriteFlights: []
};

FlightsListFavourites.propTypes = {
    favouriteFlights: PropTypes.array.isRequired
};

const Container = styled.View`
    flex: 1;
    padding: 20px;
    background-color: #F8F8F8;
`;

const mapStateToProps = state => ({favouriteFlights: state.flights.favouriteFlights});

export default connect(mapStateToProps, null)(FlightsListFavourites)