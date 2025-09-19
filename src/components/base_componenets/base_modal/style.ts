import { Theme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const style = (theme: Theme) =>
	StyleSheet.create({
		modalStyle: {
			height: theme.sizes.height,
			width: theme.sizes.height,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: theme.colors.error,
		},
		modalBackground: {
			backgroundColor: theme.colors.transparent,
			height: theme.sizes.height,
			width: theme.sizes.width,
			alignItems: 'center',
			justifyContent: 'center',
		},
	});
