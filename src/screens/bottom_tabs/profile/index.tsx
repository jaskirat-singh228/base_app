import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BottomTabStack } from 'types/navigation_type';

type ProfileScreenProps = NativeStackScreenProps<BottomTabStack, 'ProfileScreen'>;

const ProfileScreen: React.FC<ProfileScreenProps> = (props) => {
	const [isAppLock, setIsAppLock] = useState<boolean>(false);
	const [isBiometric, setIsBiometric] = useState<boolean>(false);

	const user = {
		name: 'Jaskirat Singh',
		email: 'jaskirat@example.com',
		avatar: 'https://i.pravatar.cc/150',
	};

	return (
		<ScrollView contentContainerStyle={styles.container}>
			{/* Profile Image */}
			<Image source={{ uri: user.avatar }} style={styles.avatar} />

			{/* User Info */}
			<Text style={styles.name}>{user.name}</Text>
			<Text style={styles.email}>{user.email}</Text>

			{/* Action Buttons */}
			<View style={styles.buttonsContainer}>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Edit Profile</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.button, styles.logoutButton]}>
					<Text style={styles.buttonText}>Logout</Text>
				</TouchableOpacity>
			</View>

			{/* Extra Settings */}
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Settings</Text>
				<TouchableOpacity style={styles.listItem}>
					<Text style={styles.listText}>Change Password</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.listItem}>
					<Text style={styles.listText}>Notifications</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.listItem}>
					<Text style={styles.listText}>Privacy Policy</Text>
				</TouchableOpacity>
			</View>

			{/* Extra Settings */}
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Security and Privecy</Text>
				<View style={styles.listItem}>
					<Text style={styles.listText}>App Lock</Text>
					<TouchableOpacity
						onPress={(prev) => {
							setIsAppLock(!isAppLock);
						}}
						style={[
							styles.toggleButtonContainer,
							{
								alignItems: isAppLock ? 'flex-end' : 'flex-start',
								backgroundColor: isAppLock ? 'green' : 'gray',
							},
						]}
					>
						<View
							style={[
								styles.toggleIdicator,
								{
									backgroundColor: isAppLock ? 'lightgreen' : 'lightgray',
								},
							]}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.listItem}>
					<Text style={styles.listText}>Enable Biometric</Text>
					<TouchableOpacity
						onPress={(prev) => {
							setIsBiometric(!isBiometric);
						}}
						style={[
							styles.toggleButtonContainer,
							{
								alignItems: isBiometric ? 'flex-end' : 'flex-start',
								backgroundColor: isBiometric ? 'green' : 'gray',
							},
						]}
					>
						<View
							style={[
								styles.toggleIdicator,
								{
									backgroundColor: isBiometric ? 'lightgreen' : 'lightgray',
								},
							]}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};

export default ProfileScreen;

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		alignItems: 'center',
		paddingVertical: 30,
		backgroundColor: '#F9FAFB',
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
