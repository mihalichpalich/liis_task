import React, {useState} from 'react';
import {Ionicons} from "@expo/vector-icons";

import * as styles from './styles';
import planeIcon from "../../../assets/icons/flights-list-item-icon-plane.png";
import dash from "../../../assets/icons/flights-list-item-data-dash.png";
import likeActive from "../../../assets/icons/flights-item-like-active.png";

const FavouritesListItem = ({departure, arrival, airline, price}) => {
    return (
        <styles.BrowseListItem>
            <styles.BrowseListItemTop>
                <styles.BrowseListItemIconPlane source={planeIcon}/>

                <styles.BrowseListItemFlightInfoWrapper>
                    <styles.BrowseListItemDirectionWrapper>
                        <styles.BrowseListItemDirection>{departure.city}</styles.BrowseListItemDirection>
                        <Ionicons
                            name="ios-arrow-round-forward"
                            size={24}
                            color="#C4C4C4"
                            style={{
                                marginLeft: 12,
                                marginRight: 12
                            }}
                        />
                        <styles.BrowseListItemDirection>{arrival.city}</styles.BrowseListItemDirection>
                    </styles.BrowseListItemDirectionWrapper>

                    <styles.BrowseListItemDataRow>
                        <styles.BrowseListItemData>{departure.airport_code}</styles.BrowseListItemData>
                        <styles.BrowseListItemDataRowDash source={dash}/>
                        <styles.BrowseListItemData>{departure.date}</styles.BrowseListItemData>
                        <styles.BrowseListItemDataRowDash source={dash}/>
                        <styles.BrowseListItemData>{departure.time}</styles.BrowseListItemData>
                    </styles.BrowseListItemDataRow>

                    <styles.BrowseListItemData>{airline}</styles.BrowseListItemData>
                </styles.BrowseListItemFlightInfoWrapper>
            </styles.BrowseListItemTop>

            <styles.BrowseListItemSeparator></styles.BrowseListItemSeparator>

            <styles.BrowseListItemBottom>
                <styles.BrowseListItemPriceLabel>Price:</styles.BrowseListItemPriceLabel>
                <styles.BrowseListItemPrice>{price}</styles.BrowseListItemPrice>
            </styles.BrowseListItemBottom>

            <styles.BrowseListItemLikeWrapper>
                <styles.BrowseListItemLike source={likeActive}/>
            </styles.BrowseListItemLikeWrapper>
        </styles.BrowseListItem>
    )
};

export default FavouritesListItem;