import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { userLogin } from 'store/slices/auth_slice';
import { AuthStack } from 'types/navigation_type';
import { getDataFromAsyncStorage } from 'utilities/async_storage';
import { AsyncStorageKeys } from 'utilities/async_storage_keys';

type SplashScreenProps = NativeStackScreenProps<AuthStack, 'SplashScreen'>;

const SplashScreen: React.FC<SplashScreenProps> = (props) => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		const timer = setTimeout(() => {
			checkLocalUserData();
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	const checkLocalUserData = async () => {
		const userData = await getDataFromAsyncStorage(AsyncStorageKeys.USER_LOGIN_DATA);

		if (userData) {
			const loginData: TUserLoginResponseData = JSON.parse(userData);
			dispatch(userLogin(loginData));
		} else {
			props?.navigation?.reset({
				index: 0,
				routes: [{ name: 'LoginScreen', params: { resetScreen: false } }],
			});
		}
	};

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Welcome to the app ❤️</Text>
		</View>
	);
};

export default SplashScreen;
