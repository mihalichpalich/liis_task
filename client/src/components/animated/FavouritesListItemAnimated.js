import React from 'react';
import {Animated} from "react-native";

import {FavouritesListItem} from "../index";
import {CARD_HEIGHT, LIST_HEIGHT} from "../../utils/animationFlightsListCalc";

const BrowseListItemAnimated = ({y, index, item, navigate}) => {
    const position = Animated.subtract(index * CARD_HEIGHT, y);
    const isDisappearing = -CARD_HEIGHT;
    const isTop = 0;
    const isBottom = LIST_HEIGHT - CARD_HEIGHT;
    const isAppearing = LIST_HEIGHT;

    const translateY = Animated.add(
        Animated.add(
            y,
            y.interpolate({
                inputRange: [0, 0.00001 + index * CARD_HEIGHT],
                outputRange: [0, -index * CARD_HEIGHT],
                extrapolateRight: "clamp"
            })
        ),
        position.interpolate({
            inputRange: [isBottom, isAppearing],
            outputRange: [0, -CARD_HEIGHT / 5],
            extrapolate: "clamp",
        })
    );

    const scale = position.interpolate({
        inputRange: [isDisappearing, isTop, isBottom, isAppearing],
        outputRange: [0.5, 1, 1, 0.5],
        extrapolate: "clamp"
    });

    const opacity = position.interpolate({
        inputRange: [isDisappearing, isTop, isBottom, isAppearing],
        outputRange: [0.5, 1, 1, 0.5]
    });

    return (
        <Animated.View style={{opacity, transform: [{translateY}, {scale}]}}>
            <FavouritesListItem navigate={navigate} item={item}/>
        </Animated.View>
    )
};

export default BrowseListItemAnimated;