import { CustomTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const style = (theme: CustomTheme, top: number) =>
	StyleSheet.create({
		mainContainer: {
			alignItems: 'center',
			justifyContent: 'center',
		},
		statusBarContainer: {
			height: top,
			backgroundColor: theme.colors.primary,
			zIndex: 1000,
		},
		stickyView: {
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: theme.colors.background,
		},
		avatar: {
			width: 120,
			height: 120,
			borderRadius: 60,
			marginBottom: 15,
		},
		email: {
			fontSize: 16,
			fontFamily: theme.fonts.bold.fontFamily,
			marginBottom: 15,
		},
		buttonsContainer: {
			width: '100%',
			justifyContent: 'center',
			flexDirection: 'row',
		},
		button: {
			backgroundColor: theme.colors.primary,
			width: '40%',
			paddingVertical: 10,
			paddingHorizontal: 20,
			borderRadius: 8,
			marginHorizontal: 5,
		},
		section: {
			width: '90%',
			marginTop: 20,
			backgroundColor: theme.colors.card,
			borderRadius: 12,
			padding: 15,
			shadowColor: theme.colors.black,
			shadowOpacity: 0.05,
			shadowRadius: 5,
			elevation: 3,
		},
		sectionTitle: {
			fontSize: 18,
			marginBottom: 10,
			color: theme.colors.text,
			fontFamily: theme.fonts.heavy.fontFamily,
		},
		listItem: {
			paddingVertical: 12,
			borderBottomWidth: 1,
			borderBottomColor: theme.colors.border,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
		},
		listText: {
			fontSize: 16,
			color: theme.colors.inputPlaceholder,
		},
		toggleButtonContainer: {
			height: 25,
			width: 50,
			borderRadius: 20,
			zIndex: 1000,
			justifyContent: 'center',
		},
		toggleIdicator: {
			height: 30,
			width: 30,
			borderRadius: 18,
		},
	});
