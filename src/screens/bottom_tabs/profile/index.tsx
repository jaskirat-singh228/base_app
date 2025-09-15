import { useNavigation, useTheme } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import BaseImage from 'components/base_componenets/base_image';
import BaseText from 'components/base_componenets/base_text';
import useBiometrics from 'hooks/useBiometrics';
import React from 'react';
import { Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useAppDispatch, useAppSelector } from 'store';
import { setAppLock, setBiometric } from 'store/slices/app_slice';
import { AppStack, BottomTabStack } from 'types/navigation_type';
import { setDataToAsyncStorage } from 'utilities/async_storage';
import { AsyncStorageKeys } from 'utilities/async_storage_keys';
import { IS_BIOMETRIC_ENABLED } from 'utilities/constants';
import { style } from './syle';

type ProfileScreenProps = NativeStackScreenProps<BottomTabStack, 'ProfileScreen'>;

const ProfileScreen: React.FC<ProfileScreenProps> = (props) => {
	const theme = useTheme();
	const viewStyle = style(theme);
	const dispatch = useAppDispatch();
	const { userLoginData } = useAppSelector((state) => state.authData);
	const { appLockPIN, isBiometric } = useAppSelector((state) => state.appData);
	const { triggerBiometrics } = useBiometrics();
	const appStackNavigation = useNavigation<NativeStackNavigationProp<AppStack>>();

	const enableBiometric = async () => {
		if (!isBiometric) {
			const { success } = await triggerBiometrics();
			if (success) dispatch(setBiometric(true));
			await setDataToAsyncStorage(
				AsyncStorageKeys.IS_BIOMETRIC_ENABLED,
				IS_BIOMETRIC_ENABLED.ENABLED,
			);
		} else {
			dispatch(setBiometric(false));
			await setDataToAsyncStorage(
				AsyncStorageKeys.IS_BIOMETRIC_ENABLED,
				IS_BIOMETRIC_ENABLED.DISABLED,
			);
		}
	};

	const enableAppLock = async () => {
		if (!appLockPIN) appStackNavigation.navigate('SetAppLockScreen');
		else {
			dispatch(setAppLock(''));
			await setDataToAsyncStorage(AsyncStorageKeys.APP_LOCK_PIN, '');
		}
	};

	return (
		<ScrollView contentContainerStyle={viewStyle.container}>
			{/* Profile Image */}
			<BaseImage source={{ uri: 'https://i.pravatar.cc/150' }} style={viewStyle.avatar} />
			{/* User Info */}
			<BaseText style={viewStyle.email}>{userLoginData?.email}</BaseText>
			{/* Action Buttons */}
			<View style={viewStyle.buttonsContainer}>
				<TouchableOpacity style={viewStyle.button}>
					<Text style={viewStyle.buttonText}>Edit Profile</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[viewStyle.button, viewStyle.logoutButton]}>
					<Text style={viewStyle.buttonText}>Logout</Text>
				</TouchableOpacity>
			</View>
			{/* Extra Settings */}
			<View style={viewStyle.section}>
				<Text style={viewStyle.sectionTitle}>Settings</Text>
				<TouchableOpacity style={viewStyle.listItem}>
					<Text style={viewStyle.listText}>Change Password</Text>
				</TouchableOpacity>
				<TouchableOpacity style={viewStyle.listItem}>
					<Text style={viewStyle.listText}>Notifications</Text>
				</TouchableOpacity>
				<TouchableOpacity style={viewStyle.listItem}>
					<Text style={viewStyle.listText}>Privacy Policy</Text>
				</TouchableOpacity>
			</View>
			{/* Extra Settings */}
			<View style={viewStyle.section}>
				<Text style={viewStyle.sectionTitle}>Security and Privecy</Text>
				<Pressable onPress={enableAppLock} style={viewStyle.listItem}>
					<Text style={viewStyle.listText}>App Lock</Text>
					<View
						style={[
							viewStyle.toggleButtonContainer,
							{
								alignItems: !!appLockPIN ? 'flex-end' : 'flex-start',
								backgroundColor: !!appLockPIN ? 'green' : 'gray',
							},
						]}
					>
						<View
							style={[
								viewStyle.toggleIdicator,
								{
									backgroundColor: !!appLockPIN ? 'lightgreen' : 'lightgray',
								},
							]}
						/>
					</View>
				</Pressable>
				{!!appLockPIN && (
					<Pressable onPress={enableBiometric} style={viewStyle.listItem}>
						<Text style={viewStyle.listText}>Enable Biometric</Text>
						<View
							style={[
								viewStyle.toggleButtonContainer,
								{
									alignItems: isBiometric ? 'flex-end' : 'flex-start',
									backgroundColor: isBiometric ? 'green' : 'gray',
								},
							]}
						>
							<View
								style={[
									viewStyle.toggleIdicator,
									{
										backgroundColor: isBiometric ? 'lightgreen' : 'lightgray',
									},
								]}
							/>
						</View>
					</Pressable>
				)}
			</View>
		</ScrollView>
	);
};

export default ProfileScreen;
