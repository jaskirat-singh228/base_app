import { Theme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const style = (theme: Theme) =>
	StyleSheet.create({
		baseButton: {
			backgroundColor: theme.colors.primary,
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
