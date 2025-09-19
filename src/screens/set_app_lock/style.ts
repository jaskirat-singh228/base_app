import { Theme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const style = (theme: Theme) =>
	StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme.colors.background,
			justifyContent: 'center',
			alignItems: 'center',
			padding: 20,
		},
		title: {
			fontSize: 22,
			fontFamily: theme.fonts.heavy.fontFamily,
		},
		pinMainContainer: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			width: '100%',
			paddingHorizontal: 15,
		},
		pinContainer: {
			flexDirection: 'row',
			justifyContent: 'center',
			marginTop: 50,
		},
		pinDot: {
			width: 20,
			height: 20,
			borderRadius: 10,
			borderWidth: 1,
			margin: 8,
		},
	});
