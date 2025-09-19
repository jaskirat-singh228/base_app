import { Theme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const style = (theme: Theme) =>
	StyleSheet.create({
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
