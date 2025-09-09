import { Dimensions, Platform } from 'react-native';

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';

// const { height, width } = useWindowDimensions();

export const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('screen');
export const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get('window');

export const BASE_URL = '';
export const PAGE_SIZE = 15;

// Lato fontFamily
export const LATO_REGULAR = 'Lato-Regular';
export const LATO_BOLD = 'Lato-Bold';

export const BottomTabBarIconSize = 24;
export const BottomTabBarLabelSize = 12;
