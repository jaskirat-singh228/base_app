import { Theme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const style = (theme: Theme) =>
	StyleSheet.create({
		mainContainer: { flex: 1 },
		scrollViewContent: {
			flexGrow: 1,
			alignItems: 'center',
			justifyContent: 'center',
			gap: 15,
			paddingBottom: 10,
		},
		buttonContainer: {
			gap: 10,
			alignItems: 'center',
			marginBottom: 20,
		},
		signUpContainer: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
		},
		signUpText: {
			fontFamily: theme.fonts.regular.fontFamily,
			fontSize: 17,
		},

		scrollView: {
			width: '100%',
		},
	});
