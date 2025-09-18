import { useNavigation, useTheme } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import BaseButton from 'components/base_componenets/base_button';
import BaseImage from 'components/base_componenets/base_image';
import BaseText from 'components/base_componenets/base_text';
import AppScreenContainer from 'components/base_componenets/screen_container';
import useBiometrics from 'hooks/useBiometrics';
import React, { useCallback } from 'react';
import { FlatList, ScrollView, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppDispatch, useAppSelector } from 'store';
import { resetAppData, setAppLock, setBiometric, setTheme } from 'store/slices/app_slice';
import { userLogout } from 'store/slices/auth_slice';
import { AppStack, BottomTabStack } from 'types/navigation_type';
import { removeDataFromAsyncStorage, setDataToAsyncStorage } from 'utilities/async_storage';
import { AsyncStorageKeys } from 'utilities/async_storage_keys';
import { IS_BIOMETRIC_ENABLED, IS_IOS, SCREEN_HEIGHT } from 'utilities/constants';
import { style } from './syle';

const HEADER_HEIGHT = SCREEN_HEIGHT * 0.3;

type ProfileScreenProps = NativeStackScreenProps<BottomTabStack, 'ProfileScreen'>;

const ProfileScreen: React.FC<ProfileScreenProps> = (props) => {
	const theme = useTheme();
	const { top } = useSafeAreaInsets();
	const { height, width } = useWindowDimensions();
	const isPortrait = height > width;
	const viewStyle = style(theme, top);
	const dispatch = useAppDispatch();
	const { triggerBiometrics } = useBiometrics();
	const { userLoginData } = useAppSelector((state) => state.authData);
	const { appLockPIN, isBiometric } = useAppSelector((state) => state.appData);
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
			dispatch(setBiometric(false));
			await setDataToAsyncStorage(AsyncStorageKeys.APP_LOCK_PIN, '');
			await setDataToAsyncStorage(
				AsyncStorageKeys.IS_BIOMETRIC_ENABLED,
				IS_BIOMETRIC_ENABLED.DISABLED,
			);
		}
	};

	const logoutHandler = useCallback(async () => {
		await removeDataFromAsyncStorage();
		dispatch(userLogout());
		dispatch(resetAppData());
	}, []);

	const darkModeHandler = useCallback(async () => {
		await setDataToAsyncStorage(AsyncStorageKeys.DARK_THEME, 'darkTheme');
		dispatch(setTheme('dark'));
	}, []);

	const lightModeHandler = useCallback(async () => {
		await setDataToAsyncStorage(AsyncStorageKeys.DARK_THEME, 'lightTheme');
		dispatch(setTheme('light'));
	}, []);

	const systemModeHandler = useCallback(async () => {
		await setDataToAsyncStorage(AsyncStorageKeys.DARK_THEME, 'systemTheme');
		dispatch(setTheme('system'));
	}, []);

	return (
		<AppScreenContainer style={viewStyle.mainContainer} showBottomBar={false}>
			<ScrollView
				stickyHeaderHiddenOnScroll={false}
				stickyHeaderIndices={[1]}
				style={{ flex: 1 }}
				showsVerticalScrollIndicator={false}
			>
				<View style={viewStyle.stickyView}>
					<View style={{ alignItems: 'center' }}>
						<BaseImage
							source={{ uri: 'https://i.pravatar.cc/150' }}
							style={viewStyle.avatar}
						/>
						<BaseText style={viewStyle.email}>{userLoginData?.email}</BaseText>
					</View>
					<View style={viewStyle.buttonsContainer}>
						<BaseButton style={viewStyle.button} title='Edit Profile' />
						<BaseButton
							onPress={logoutHandler}
							style={[viewStyle.button, { backgroundColor: theme.colors.error }]}
							title='Logout'
						/>
					</View>
				</View>
				{/* <View style={viewStyle.section}>
					<BaseText style={viewStyle.sectionTitle}>Security and Privacy</BaseText>
					<View style={viewStyle.listItem}>
						<BaseText style={viewStyle.listText}>App Lock</BaseText>
						<Pressable
							onPress={enableAppLock}
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
						</Pressable>
					</View>
					{!!appLockPIN && (
						<View style={viewStyle.listItem}>
							<BaseText style={viewStyle.listText}>Enable Biometric</BaseText>
							<Pressable
								onPress={enableBiometric}
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
											backgroundColor: isBiometric
												? 'lightgreen'
												: 'lightgray',
										},
									]}
								/>
							</Pressable>
						</View>
					)}
				</View>
				<View style={viewStyle.section}>
					<BaseText style={viewStyle.sectionTitle}>Theme</BaseText>
					<Pressable style={viewStyle.listItem} onPress={lightModeHandler}>
						<BaseText style={viewStyle.listText}>Light Mode</BaseText>
					</Pressable>
					<Pressable style={viewStyle.listItem} onPress={darkModeHandler}>
						<BaseText style={viewStyle.listText}>Dark Mode</BaseText>
					</Pressable>
					<Pressable style={viewStyle.listItem} onPress={systemModeHandler}>
						<BaseText style={viewStyle.listText}>System Mode</BaseText>
					</Pressable>
				</View> */}

				<View style={{ width: '100%', backgroundColor: theme.colors.background }}>
					<BaseText
						style={{
							width: '100%',
							fontSize: 18,
							color: theme.colors.text,
							margin: 12,
							fontFamily: theme.fonts.heavy.fontFamily,
						}}
					>
						Posts
					</BaseText>
				</View>

				<FlatList
					data={Array.from({ length: 20 }, (_, i) => i + 1)}
					scrollEnabled={false}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{ paddingBottom: 100 }}
					numColumns={3}
					renderItem={() => {
						return (
							<BaseImage
								style={{
									height: isPortrait
										? height * 0.13
										: IS_IOS
										? height * 0.54
										: height * 0.54,
									width: isPortrait
										? width * 0.3
										: IS_IOS
										? width * 0.27
										: width * 0.3,
									backgroundColor: theme.colors.inputPlaceholder,
									margin: 5,
									borderRadius: theme.colors.borderRadius,
								}}
								source={{ uri: 'https://i.pravatar.cc/150' }}
							/>
						);
					}}
				/>
			</ScrollView>
		</AppScreenContainer>
	);
};

export default ProfileScreen;
