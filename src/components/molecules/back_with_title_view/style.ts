import { CustomTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const style = (theme: CustomTheme) =>
	StyleSheet.create({
		mainContainer: {
			width: '100%',
			flexDirection: 'row',
			alignItems: 'center',
			backgroundColor: theme.colors.primary,
			padding: 10,
		},
		headerContainer: {
			flexDirection: 'row',
			alignItems: 'center',
			width: '100%',
		},
	});
