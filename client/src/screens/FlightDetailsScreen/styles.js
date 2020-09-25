import styled from "styled-components";

import * as mixins from '../../utils/mixins'

export const FlightDetailsScreenBackground = styled.ImageBackground`
    height: 385px;
    width: 375px;
    left: 0;
    top: -2px;
    elevation: 0;
`;

export const FlightDetailsScreenInfoWrapper = styled.View`
    ${mixins.bgColorMain};
    height: 100%;
    top: -43px;    
    elevation: 1;
    border-radius: 30px;
`;

export const FlightDetailsScreenFlightInfo = styled.View`
    padding: 30px 30px 0 27px;
    margin-bottom: 18px;
`;

export const FlightDetailsScreenDirection = styled.View`
    width: 315px;
    flex-direction: row;
    justify-content: space-between;
    align-content: space-between;
    padding-left: 15px;
    padding-right: 35px;
    margin-bottom: 16px;
`;

export const FlightDetailsScreenDirectionSmall = styled.Text`
    ${mixins.fontFamilyRegular};
    ${mixins.fontSizeInfo};    
    ${mixins.letterSpacing};    
    ${mixins.fontColorGrey};
    line-height: 22px;
`;

export const FlightDetailsScreenDirectionLarge = styled.Text`
    ${mixins.fontFamilySemibold};
    ${mixins.fontSizeLarge};
    ${mixins.letterSpacing};
    ${mixins.fontColorLessDark};
    line-height: 41px;
`;

export const FlightDetailsScreenDirectionArrow = styled.Image`
    position: absolute;
    top: 35px;
    left: 147px;
`;

export const FlightDetailsScreenHighlighted = styled.ImageBackground`
    flex-direction: row;
    width: 307px; 
    height: 84px;
    padding: 15px 45px;
`;

export const FlightDetailsScreenHighlightedItem = styled.View`
    align-items: center;
`;

export const FlightDetailsScreenHighlightedTitle = styled.Text`
    ${mixins.fontFamilyLight};
    ${mixins.fontSizeInfo};    
    ${mixins.letterSpacing};    
    ${mixins.fontColorLight};
    margin-bottom: 3px;
    line-height: 22px;
`;

export const FlightDetailsScreenHighlightedValue = styled.Text`
    ${mixins.fontFamilySemibold};
    ${mixins.fontSizeHighlighted};
    ${mixins.letterSpacing};    
    ${mixins.fontColorLight};
    line-height: 22px;
`;

export const FlightDetailsScreenHighlightedSeparator = styled.View`
    ${mixins.bgColorMain};
    width: 1px;
    height: 50px;
    margin-left: 25px;
    margin-right: 40px;
    border-radius: 2px;
`;

export const FlightDetailsScreenLikeWrapper = styled.TouchableOpacity`
    position: absolute;
    right: 3px;
    top: -5px;
`;

export const FlightDetailsScreenLike = styled.Image`
    width: 20px;
    height: 17px;
`;

export const FlightDetailsScreenCarouselImage = styled.Image`
    width: 139px;
    height: 205px;
    border-radius: 10px;
`;