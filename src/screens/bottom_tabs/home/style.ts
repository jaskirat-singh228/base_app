import { Theme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const style = (theme: Theme) =>
	StyleSheet.create({
		mainContainer: {
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: 'orange',
			gap: 20,
		},
		emailText: { fontSize: 20, fontFamily: theme.fonts.bold.fontFamily },
	});
