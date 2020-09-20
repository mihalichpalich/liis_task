import React from 'react';
import styled from "styled-components/native";

import * as mixins from '../utils/mixins'

const ScreenTitle = () => <Title>Flights</Title>;

const Title = styled.Text`
    ${mixins.fontFamilySemibold};
    ${mixins.fontColorDark};
    ${mixins.fontSizeMain};
    ${mixins.letterSpacing};
    margin-top: 26px;
    margin-bottom: 8px;
    font-weight: 600;
    line-height: 22px;
`;
export default ScreenTitle;