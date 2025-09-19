import { Theme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const style = (theme: Theme) =>
	StyleSheet.create({
		mainContainer: {
			flex: 1,
			width: '100%',
			alignItems: 'center',
			justifyContent: 'center',
			gap: 15,
		},
		formKeyboardAvoidingContainer: {
			height: '100%',
			width: '100%',
		},
		button: {
			marginVertical: 15,
		},
	});
