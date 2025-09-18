import { CustomTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from 'utilities/constants';

export const style = (theme: CustomTheme) =>
	StyleSheet.create({
		modalView: {
			height: '100%',
			width: '100%',
			backgroundColor: 'red',
		},
		screenContainer: {
			height: SCREEN_HEIGHT,
			width: SCREEN_WIDTH,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: theme.colors.error,
		},
	});
