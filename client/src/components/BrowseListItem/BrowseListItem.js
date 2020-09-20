import React, {useState, useEffect} from 'react';
import {Ionicons} from "@expo/vector-icons";
import {connect} from 'react-redux';

import * as styles from './styles';
import planeIcon from "../../../assets/icons/flights-list-item-icon-plane.png";
import dash from "../../../assets/icons/flights-list-item-data-dash.png";
import likeNotActive from "../../../assets/icons/flights-item-like-not-active.png";
import likeActive from "../../../assets/icons/flights-item-like-active.png";
import {addToFavourites, removeFromFavourites, makeFavourite, makeUnfavourite} from "../../redux/actions";

const BrowseListItem = ({item, addToFavourites, removeFromFavourites, makeFavourite, makeUnfavourite}) => {
    const {departure, boarding, airline, price, favourite} = item;
    const [like, setLike] = useState(false);

    useEffect(() => {
        setLike(favourite)
    }, [favourite]);

    const onLikeChange = () => {
        if (!like) {
            setLike(true);
            addToFavourites(item);
            makeFavourite(item)
        } else {
            setLike(false);
            removeFromFavourites(item);
            makeUnfavourite(item)
        }
    };

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
                        <styles.BrowseListItemDirection>{boarding.city}</styles.BrowseListItemDirection>
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

            <styles.BrowseListItemLikeWrapper onPress={onLikeChange}>
                <styles.BrowseListItemLike source={!like ? likeNotActive : likeActive}/>
            </styles.BrowseListItemLikeWrapper>
        </styles.BrowseListItem>
    )
};

const mapDispatchToProps = {
    addToFavourites,
    removeFromFavourites,
    makeFavourite,
    makeUnfavourite
};

export default connect(null, mapDispatchToProps)(BrowseListItem);