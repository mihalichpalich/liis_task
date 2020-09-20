import {Dimensions} from 'react-native';

const { width, height } = Dimensions.get("window");
const itemWidth = 135;
const itemHeight = 335;
const margin = 20;

const RATIO = itemWidth / itemHeight;
const CARD_WIDTH = width * 0.8;
const DEFAULT_CARD_HEIGHT = CARD_WIDTH * RATIO;
export const CARD_HEIGHT = DEFAULT_CARD_HEIGHT + margin * 2;
export const LIST_HEIGHT = height - 139;