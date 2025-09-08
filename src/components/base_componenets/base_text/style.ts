import { CustomTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const style = (theme: CustomTheme) =>
	StyleSheet.create({
		baseText: {
			color: theme.colors.text,
			fontFamily: theme.fonts.regular.fontFamily,
			fontWeight: theme.fonts.regular.fontWeight,
		},
	});
