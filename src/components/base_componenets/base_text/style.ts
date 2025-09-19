import { Theme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const style = (theme: Theme) =>
	StyleSheet.create({
		baseText: {
			color: theme.colors.text,
			fontFamily: theme.fonts.regular.fontFamily,
		},
	});
