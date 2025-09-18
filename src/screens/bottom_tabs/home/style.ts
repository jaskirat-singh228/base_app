import { CustomTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const style = (theme: CustomTheme) =>
	StyleSheet.create({
		mainContainer: {
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: 'orange',
		},
		emailText: { fontSize: 20, fontFamily: theme.fonts.bold.fontFamily },
	});
