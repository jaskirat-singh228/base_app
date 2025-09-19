import { useNavigation, useTheme } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import BaseButton from 'components/base_componenets/base_button';
import BaseImage from 'components/base_componenets/base_image';
import BaseText from 'components/base_componenets/base_text';
import AppScreenContainer from 'components/base_componenets/screen_container';
import useBiometrics from 'hooks/useBiometrics';
import React, { useCallback, useState } from 'react';
import { FlatList, Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppDispatch, useAppSelector } from 'store';
import { resetAppData, setAppLock, setBiometric, setTheme } from 'store/slices/app_slice';
import { userLogout } from 'store/slices/auth_slice';
import { AppStack, BottomTabStack } from 'types/navigation_type';
import { removeDataFromAsyncStorage, setDataToAsyncStorage } from 'utilities/async_storage';
import { AsyncStorageKeys } from 'utilities/async_storage_keys';
import { IS_BIOMETRIC_ENABLED, IS_IOS } from 'utilities/constants';
import { style } from './syle';

type ProfileScreenProps = NativeStackScreenProps<BottomTabStack, 'ProfileScreen'>;

const ProfileScreen: React.FC<ProfileScreenProps> = (props) => {
	const theme = useTheme();
	const { top } = useSafeAreaInsets();
	const viewStyle = style(theme, top);
	const dispatch = useAppDispatch();
	const { triggerBiometrics } = useBiometrics();
	const { userLoginData } = useAppSelector((state) => state.authData);
	const { appLockPIN, isBiometric } = useAppSelector((state) => state.appData);
	const [selectedMode, setSelectedMode] = useState<'light' | 'dark' | 'system'>('system');
	const appStackNavigation = useNavigation<NativeStackNavigationProp<AppStack>>();

	const isPortrait = theme.sizes.height > theme.sizes.width;

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
		setSelectedMode('dark');
		dispatch(setTheme('dark'));
	}, []);

	const lightModeHandler = useCallback(async () => {
		await setDataToAsyncStorage(AsyncStorageKeys.DARK_THEME, 'lightTheme');
		setSelectedMode('light');
		dispatch(setTheme('light'));
	}, []);

	const systemModeHandler = useCallback(async () => {
		await setDataToAsyncStorage(AsyncStorageKeys.DARK_THEME, 'systemTheme');
		setSelectedMode('system');
		dispatch(setTheme('system'));
	}, []);

	return (
		<AppScreenContainer style={viewStyle.mainContainer} showBottomBar={false}>
			<ScrollView
				stickyHeaderHiddenOnScroll={false}
				stickyHeaderIndices={[2]}
				style={{ flex: 1, width: '100%' }}
				showsVerticalScrollIndicator={false}
			>
				<View style={viewStyle.stickyView}>
					<View style={viewStyle.profilePicContainer}>
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
				<View style={viewStyle.sectionsContainer}>
					<View
						style={[
							viewStyle.section,
							{
								width: isPortrait ? '90%' : '95%',
							},
						]}
					>
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
											backgroundColor: !!appLockPIN
												? 'lightgreen'
												: 'lightgray',
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
					<View
						style={[
							viewStyle.section,
							{
								width: isPortrait ? '90%' : '95%',
							},
						]}
					>
						<BaseText style={viewStyle.sectionTitle}>Theme</BaseText>
						<Pressable
							style={[
								viewStyle.listItem,
								{
									backgroundColor:
										selectedMode === 'light'
											? theme.colors.border
											: theme.colors.card,
								},
							]}
							onPress={lightModeHandler}
						>
							<BaseText style={viewStyle.listText}>Light Mode</BaseText>
						</Pressable>
						<Pressable
							style={[
								viewStyle.listItem,
								{
									backgroundColor:
										selectedMode === 'dark'
											? theme.colors.border
											: theme.colors.card,
								},
							]}
							onPress={darkModeHandler}
						>
							<BaseText style={viewStyle.listText}>Dark Mode</BaseText>
						</Pressable>
						<Pressable
							style={[
								viewStyle.listItem,
								{
									backgroundColor:
										selectedMode === 'system'
											? theme.colors.border
											: theme.colors.card,
								},
							]}
							onPress={systemModeHandler}
						>
							<BaseText style={viewStyle.listText}>System Mode</BaseText>
						</Pressable>
					</View>
				</View>

				<View style={viewStyle.postsTextContainer}>
					<BaseText style={viewStyle.postsText}>Posts</BaseText>
				</View>

				<View style={{ alignItems: 'center' }}>
					<FlatList
						data={Array.from({ length: 20 }, (_, i) => i + 1)}
						scrollEnabled={false}
						showsVerticalScrollIndicator={false}
						contentContainerStyle={{
							paddingBottom: 100,
						}}
						numColumns={3}
						renderItem={() => {
							return (
								<BaseImage
									style={{
										height: isPortrait
											? theme.sizes.height * 0.13
											: theme.sizes.height * 0.54,
										width: isPortrait
											? theme.sizes.width * 0.29
											: IS_IOS
											? theme.sizes.width * 0.27
											: theme.sizes.width * 0.3,
										backgroundColor: theme.colors.inputPlaceholder,
										margin: 5,
										borderRadius: theme.colors.borderRadius,
									}}
									source={{ uri: 'https://i.pravatar.cc/150' }}
								/>
							);
						}}
					/>
				</View>
			</ScrollView>
		</AppScreenContainer>
	);
};

export default ProfileScreen;
