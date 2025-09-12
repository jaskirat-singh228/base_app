import { CustomTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const style = (theme: CustomTheme) =>
	StyleSheet.create({
		container: {
			flexGrow: 1,
			alignItems: 'center',
			paddingVertical: 30,
			backgroundColor: theme.colors.background,
		},
		avatar: {
			width: 120,
			height: 120,
			borderRadius: 60,
			marginBottom: 15,
		},
		name: {
			fontSize: 22,
			fontWeight: '600',
			color: '#111827',
		},
		email: {
			fontSize: 16,
			color: '#6B7280',
			marginBottom: 20,
		},
		buttonsContainer: {
			flexDirection: 'row',
			marginBottom: 30,
		},
		button: {
			backgroundColor: '#3B82F6',
			paddingVertical: 10,
			paddingHorizontal: 20,
			borderRadius: 8,
			marginHorizontal: 5,
		},
		logoutButton: {
			backgroundColor: '#EF4444',
		},
		buttonText: {
			color: '#fff',
			fontSize: 16,
			fontWeight: '500',
		},
		section: {
			width: '90%',
			marginTop: 20,
			backgroundColor: '#fff',
			borderRadius: 12,
			padding: 15,
			shadowColor: '#000',
			shadowOpacity: 0.05,
			shadowRadius: 5,
			elevation: 3,
		},
		sectionTitle: {
			fontSize: 18,
			fontWeight: '600',
			marginBottom: 10,
			color: '#111827',
		},
		listItem: {
			paddingVertical: 12,
			borderBottomWidth: 1,
			borderBottomColor: '#E5E7EB',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
		},
		listText: {
			fontSize: 16,
			color: '#374151',
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
