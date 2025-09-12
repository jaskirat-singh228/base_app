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

export const MaterialIcon = {
	HOME: 'home',
	CHEVRON_UP: 'chevron-up',
	CHEVRON_DOWN: 'chevron-down',
	CHEVRON_LEFT: 'chevron-left',
	CHEVRON_RIGHT: 'chevron-right',
};

export const IS_BIOMETRIC_ENABLED = {
	ENABLED: 'BIOMETRIC_ENABLED',
	DISABLED: 'BIOMETRIC_DISABLED',
};

export const IS_APPLOCK_ENABLED = {
	ENABLED: 'APPLOCK_ENABLED',
	DISABLED: 'APPLOCK_DISABLED',
};
