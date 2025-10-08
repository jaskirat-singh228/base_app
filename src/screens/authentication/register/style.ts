import { Theme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const style = (theme: Theme) =>
	StyleSheet.create({
		keyboardAvoidingView: {
			flex: 1,
			width: '100%',
			gap: 15,
		},
		mainContainer: {
			height: '100%',
			width: '100%',
			justifyContent: 'center',
			alignItems: 'center',
		},
	});
