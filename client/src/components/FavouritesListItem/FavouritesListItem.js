import React from 'react';
import {Ionicons} from "@expo/vector-icons";

import * as styles from './styles';
import planeIcon from "../../../assets/icons/flights-list-item-icon-plane.png";
import dash from "../../../assets/icons/flights-list-item-data-dash.png";
import likeActive from "../../../assets/icons/flights-item-like-active.png";

const FavouritesListItem = ({navigate, item}) => {
    const {departure, boarding, airline, price} = item;

    return (
        <styles.FavouritesListItem onPress={navigate.bind(this, 'FlightDetails', item)}>
            <styles.FavouritesListItemTop>
                <styles.FavouritesListItemIconPlane source={planeIcon}/>

                <styles.FavouritesListItemFlightInfoWrapper>
                    <styles.FavouritesListItemDirectionWrapper>
                        <styles.FavouritesListItemDirection>{departure.city}</styles.FavouritesListItemDirection>
                        <Ionicons
                            name="ios-arrow-round-forward"
                            size={24}
                            color="#C4C4C4"
                            style={{
                                marginLeft: 12,
                                marginRight: 12
                            }}
                        />
                        <styles.FavouritesListItemDirection>{boarding.city}</styles.FavouritesListItemDirection>
                    </styles.FavouritesListItemDirectionWrapper>

                    <styles.FavouritesListItemDataRow>
                        <styles.FavouritesListItemData>{departure.airport_code}</styles.FavouritesListItemData>
                        <styles.FavouritesListItemDataRowDash source={dash}/>
                        <styles.FavouritesListItemData>{departure.date}</styles.FavouritesListItemData>
                        <styles.FavouritesListItemDataRowDash source={dash}/>
                        <styles.FavouritesListItemData>{departure.time}</styles.FavouritesListItemData>
                    </styles.FavouritesListItemDataRow>

                    <styles.FavouritesListItemData>{airline}</styles.FavouritesListItemData>
                </styles.FavouritesListItemFlightInfoWrapper>
            </styles.FavouritesListItemTop>

            <styles.FavouritesListItemSeparator></styles.FavouritesListItemSeparator>

            <styles.FavouritesListItemBottom>
                <styles.FavouritesListItemPriceLabel>Price:</styles.FavouritesListItemPriceLabel>
                <styles.FavouritesListItemPrice>{price}</styles.FavouritesListItemPrice>
            </styles.FavouritesListItemBottom>

            <styles.FavouritesListItemLikeWrapper>
                <styles.FavouritesListItemLike source={likeActive}/>
            </styles.FavouritesListItemLikeWrapper>
        </styles.FavouritesListItem>
    )
};

export default FavouritesListItem;