import React from 'react';
import styled from "styled-components/native";
import {FlatList, Animated} from 'react-native';

import {BrowseListItemAnimated} from "../components/animated";
import data from '../api/api';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const FlightsListBrowse = () => {
    const y = new Animated.Value(0);
    const onScroll = Animated.event([{nativeEvent: {contentOffset: {y}}}], {useNativeDriver: true});

    return (
        <Container>
            <AnimatedFlatList
                bounces={false}
                scrollEventThrottle={16}
                data={data}
                keyextractor={(item, index) => index}
                renderItem={({item, index}) => <BrowseListItemAnimated {...item} y={y} index={index}/>}
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

export default FlightsListBrowse