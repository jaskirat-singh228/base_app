import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
export type Theme = { [key: string]: ViewStyle | TextStyle | ImageStyle };

export const lightThemeColors = {
	primary: '#3B82F6',
	secondary: '#F59E0B',
	background: '#FFFFFF',
	card: '#F9FAFB',
	text: '#111827',
	border: '#E5E7EB',
	notification: '#EF4444',
};

export const darkThemeColors = {
	primary: '#60A5FA',
	secondary: '#FBBF24',
	background: '#111827',
	card: '#1F2937',
	text: '#F9FAFB',
	border: '#374151',
	notification: '#F87171',
};

// export const myTheme: NavigationTheme = {
// 	colors: lightThemeColors,
// 	dark: false,
// 	fonts: {
// 		regular: { fontFamily: 'Lato-Regular', fontWeight: '400' },
// 		medium: { fontFamily: 'Lato-Regular', fontWeight: '500' },
// 		bold: { fontFamily: 'Lato-Bold', fontWeight: '700' },
// 		heavy: { fontFamily: 'Lato-Bold', fontWeight: 'bold' },
// 	},
// };

// export const useTheme = () => {
// 	const theme = useColorScheme();
// 	return theme === 'dark' ? { ...myTheme, dark: true, colors: darkThemeColors } : myTheme;
// };
