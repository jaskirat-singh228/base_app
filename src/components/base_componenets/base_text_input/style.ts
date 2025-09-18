import { CustomTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT } from 'utilities/constants';

export const style = (theme: CustomTheme) =>
	StyleSheet.create({
		mainContainer: {
			width: '100%',
			paddingHorizontal: 20,
		},
		label: {
			color: theme.colors.text,
			width: '100%',
			padding: 5,
			fontFamily: theme.fonts.medium.fontFamily,
		},
		textInput: {
			height: SCREEN_HEIGHT * 0.055,
			width: '100%',
			padding: 10,
			borderRadius: 10,
			borderWidth: 1,
			fontSize: 15,
			color: theme.colors.text,
			borderColor: theme.colors.border,
			fontFamily: theme.fonts.regular.fontFamily,
			backgroundColor: theme.colors.inputBackground,
		},
	});
