import React from 'react';
import styled from "styled-components/native";
import {FlatList} from "react-native";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {FavouritesListItem} from "../components";

const FlightsListFavourites = ({navigation, favouriteFlights}) => {
    return (
        <Container>
            <FlatList
                showsVerticalScrollIndicator={false}
                distanceBetweenItem={20}
                data={favouriteFlights}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                    <FavouritesListItem
                        item={item}
                        key={index}
                        navigate={navigation.navigate}
                    />)}
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