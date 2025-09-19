import { Theme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';

export const style = (theme: Theme, insets: EdgeInsets) =>
	StyleSheet.create({
		mainContainer: { flex: 1 },
		statusBar: {
			height: insets.top,
			width: '100%',
			backgroundColor: theme.colors.primary,
			zIndex: 1000,
		},
		children: {
			flex: 1,
			backgroundColor: theme.colors.background,
			paddingLeft: insets.left,
			paddingRight: insets.right,
		},
		bottomBar: {
			height: insets.bottom,
			width: '100%',
			backgroundColor: theme.colors.primary,
			zIndex: 1000,
		},
	});
