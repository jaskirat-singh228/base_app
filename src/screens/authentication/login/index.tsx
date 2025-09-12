import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { useAppDispatch } from 'store';
import { userLogin } from 'store/slices/auth_slice';
import { AuthStack } from 'types/navigation_type';
import { setDataToAsyncStorage } from 'utilities/async_storage';
import { AsyncStorageKeys } from 'utilities/async_storage_keys';

type LoginScreenProps = NativeStackScreenProps<AuthStack, 'LoginScreen'>;

const LoginScreen: React.FC<LoginScreenProps> = () => {
	const dispatch = useAppDispatch();

	const loginHandler = async () => {
		const userData = { email: 'kirat@gmail.com' };

		await setDataToAsyncStorage(AsyncStorageKeys.USER_LOGIN_DATA, JSON.stringify(userData));
		dispatch(userLogin(userData));
		console.log('login successfuly!');
	};

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>LoginScreen</Text>
			<Button title='Login' onPress={loginHandler} />
		</View>
	);
};

export default LoginScreen;
