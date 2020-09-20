import React, {useEffect} from 'react';
import styled from "styled-components/native";
import {FlatList, Animated} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from "prop-types";

import {BrowseListItemAnimated} from "../components/animated";
import {loadRequest} from "../redux/actions";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const FlightsListBrowse = ({fetchedFlights, loadRequest}) => {
    const y = new Animated.Value(0);
    const onScroll = Animated.event([{nativeEvent: {contentOffset: {y}}}], {useNativeDriver: true});

    useEffect(() => {
        loadRequest()
    }, []);

    return (
        <Container>
            <AnimatedFlatList
                bounces={false}
                scrollEventThrottle={16}
                data={fetchedFlights}
                keyextractor={(item, index) => index}
                renderItem={({item, index}) => <BrowseListItemAnimated item={item} y={y} index={index}/>}
                showsVerticalScrollIndicator={false}
                {...{onScroll}}
            />
        </Container>
    )
};

const Container = styled.View`
    flex: 1;
    padding: 20px;
    background-color: #F8F8F8;
`;

FlightsListBrowse.defaultProps = {
    fetchedFlights: []
};

FlightsListBrowse.propTypes = {
    fetchedFlights: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    fetchedFlights: state.flights.fetchedFlights
});

const mapDispatchToProps = {
    loadRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(FlightsListBrowse)