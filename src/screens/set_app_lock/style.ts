import { CustomTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const style = (theme: CustomTheme) =>
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
		keypadConatiner: {
			width: '100%',
			flexDirection: 'row',
			flexWrap: 'wrap',
			alignContent: 'center',
			columnGap: '5%',
			rowGap: 10,
			paddingBottom: 40,
			justifyContent: 'center',
			alignItems: 'center',
			paddingHorizontal: 15,
		},
		key: {
			height: 65,
			width: '30%',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: theme.colors.primary,
			borderRadius: 50,
		},
		keyText: {
			fontSize: 24,
			color: theme.colors.white,
			fontWeight: '600',
		},
	});
