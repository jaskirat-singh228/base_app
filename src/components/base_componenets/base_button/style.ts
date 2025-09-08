import { CustomTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const style = (theme: CustomTheme) =>
	StyleSheet.create({
		baseButton: {
			backgroundColor: theme.colors.primary,
			height: 50,
			width: '90%',
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
