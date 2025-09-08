import { CustomTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const style = (theme: CustomTheme) =>
	StyleSheet.create({
		mainContainer: {
			width: '100%',
			paddingHorizontal: 20,
		},
		textInput: {
			height: 50,
			width: '100%',
			padding: 10,
			borderRadius: 10,
			borderWidth: 1,
			color: theme.colors.text,
			borderColor: theme.colors.border,
			fontFamily: theme.fonts.regular.fontFamily,
			backgroundColor: theme.colors.inputBackground,
		},
		error: {
			color: theme.colors.error,
			width: '100%',
			padding: 5,
		},
	});
