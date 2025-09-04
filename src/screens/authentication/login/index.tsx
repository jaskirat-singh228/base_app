import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { userLogin } from 'store/slices/auth_slice';
import { AuthStack } from 'types/navigation_type';

type LoginScreenProps = NativeStackScreenProps<AuthStack, 'LoginScreen'>;

const LoginScreen: React.FC<LoginScreenProps> = () => {
	const dispatch = useDispatch();
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>LoginScreen</Text>
			<Button
				title='Login'
				onPress={() => {
					dispatch(userLogin({ email: 'kirat@gmail.com' }));
					console.log('login successfuly!');
				}}
			/>
		</View>
	);
};

export default LoginScreen;
