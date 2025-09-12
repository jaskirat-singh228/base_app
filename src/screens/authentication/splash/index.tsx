import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BaseText from 'components/base_componenets/base_text';
import React from 'react';
import { View } from 'react-native';
import { useAppDispatch } from 'store';
import { setAppLock } from 'store/slices/app_slice';
import { userLogin } from 'store/slices/auth_slice';
import { AuthStack } from 'types/navigation_type';
import { getDataFromAsyncStorage, setDataToAsyncStorage } from 'utilities/async_storage';
import { AsyncStorageKeys } from 'utilities/async_storage_keys';

type SplashScreenProps = NativeStackScreenProps<AuthStack, 'SplashScreen'>;

const SplashScreen: React.FC<SplashScreenProps> = (props) => {
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		const timer = setTimeout(() => {
			checkLocalUserData();
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	const checkLocalUserData = async () => {
		const userData = await getDataFromAsyncStorage(AsyncStorageKeys.USER_LOGIN_DATA);
		const appLockPin = await getDataFromAsyncStorage(AsyncStorageKeys.APP_LOCK);
		console.log('App lock ==> ', appLockPin);

		if (userData) {
			const loginData: TUserLoginResponseData = JSON.parse(userData);

			await setDataToAsyncStorage(AsyncStorageKeys.USER_LOGIN_DATA, JSON.stringify(userData));
			dispatch(userLogin(loginData));
			// Check App Lock and Biometric
			if (appLockPin) {
				dispatch(setAppLock(appLockPin));
			}
		} else {
			props?.navigation?.reset({
				index: 0,
				routes: [{ name: 'LoginScreen', params: { resetScreen: false } }],
			});
		}
	};

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<BaseText style={{ fontSize: 20 }}>Welcome to the app ❤️</BaseText>
		</View>
	);
};

export default SplashScreen;
