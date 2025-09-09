import { CustomTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from 'utilities/constants';

export const style = (theme: CustomTheme) =>
	StyleSheet.create({
		baseButton: {
			backgroundColor: theme.colors.primary,
			height: SCREEN_HEIGHT * 0.06,
			width: SCREEN_WIDTH * 0.9,
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: 10,
		},
		iconContainer: { flexDirection: 'row', gap: 10, alignItems: 'center' },
		title: {
			color: theme.colors.white,
			fontSize: 17,
			fontFamily: theme.fonts.bold.fontFamily,
		},
	});
