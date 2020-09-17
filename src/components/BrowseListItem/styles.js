import styled from "styled-components/native";

export const BrowseListItem = styled.View`
    margin-bottom: 20px;
    padding-top: 20px;
    padding-left: 20px;
    padding-bottom: 6px;
    background-color: #FFFFFF;
    border-radius: 8px;    
    shadow-radius: 3.5;
    elevation: 4;
`;

export const BrowseListItemTop = styled.View`
    flex-direction: row;
    margin-bottom: 10px;
`;

export const BrowseListItemIconPlane = styled.Image`
    width: 60px;
    height: 60px;
    margin-right: 20px;
`;

export const BrowseListItemFlightInfoWrapper = styled.View`
    flex-direction: column;
`;

export const BrowseListItemDirectionWrapper = styled.View`
    flex-direction: row;
`;

export const BrowseListItemDirection = styled.Text`
    font-family: SF Pro Text Light;
    font-size: 16px;
    line-height: 22px;    
    letter-spacing: -0.408px;   
    color: #000000;
`;

export const BrowseListItemDataRow = styled.View`
    flex-direction: row;
`;

export const BrowseListItemDataRowDash = styled.Image`
    margin: 9px 5px;
`;

export const BrowseListItemData = styled.Text`
    font-family: SF Pro Text Regular;
    font-size: 13px;
    line-height: 18px;   
    letter-spacing: -0.408px;    
    color: #878787;
`;

export const BrowseListItemSeparator = styled.View`
    width: 283px;
    height: 1px;
    margin-bottom: 5px;
    background: rgba(196, 196, 196, 0.5);
    border-radius: 2px;
`;

export const BrowseListItemBottom = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 22px;
`;

export const BrowseListItemPriceLabel = styled.Text`
    margin-right: 8px;
    font-family: SF Pro Text Light;
    font-size: 11px;
    line-height: 26px;    
    letter-spacing: -0.408px;    
    color: #878787;
`;

export const BrowseListItemPrice = styled.Text`
    font-family: SF Pro Text Regular;
    font-size: 17px;
    line-height: 22px;    
    letter-spacing: -0.408px;    
    color: #000000;
`;

export const BrowseListItemLikeWrapper = styled.TouchableOpacity`
    position: absolute;
    top: 15px;
    right: 13px;
`;

export const BrowseListItemLike = styled.Image`
    width: 17px;
    height: 15px;
`;