import styled from "styled-components/native";

import * as mixins from '../../utils/mixins'

export const BrowseListItem = styled.View`
    ${mixins.bgColorMain};
    margin-bottom: 20px;
    padding-top: 20px;
    padding-left: 20px;
    padding-bottom: 6px;
    border-radius: 8px;    
    shadow-radius: 3.5;
    elevation: 2;
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
    ${mixins.fontSizeMain};
    ${mixins.fontFamilyLight};
    ${mixins.letterSpacing};     
    ${mixins.fontColorDark};
    line-height: 22px;  
`;

export const BrowseListItemDataRow = styled.View`
    flex-direction: row;
`;

export const BrowseListItemDataRowDash = styled.Image`
    margin: 9px 5px;
`;

export const BrowseListItemData = styled.Text`
    ${mixins.fontFamilyRegular};
    ${mixins.fontSizeInfo};
    ${mixins.letterSpacing};     
    ${mixins.fontColorGrey};
    line-height: 18px;    
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
    ${mixins.fontFamilyLight};
    ${mixins.fontSizeSmall};
    ${mixins.letterSpacing};
    ${mixins.fontColorGrey};  
    margin-right: 8px;
    line-height: 26px;      
`;

export const BrowseListItemPrice = styled.Text`
    ${mixins.fontFamilyRegular};
    ${mixins.letterSpacing};
    ${mixins.fontColorDark};
    font-size: 17px;
    line-height: 22px;    
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