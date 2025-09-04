import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
import LoginScreen from 'screens/authentication/login';
import SignUpScreen from 'screens/authentication/sign_up';
import SplashScreen from 'screens/authentication/splash';
import { RootState } from 'store';
import { AuthStack } from 'types/navigation_type';

const Stack = createNativeStackNavigator<AuthStack>();

export const AuthNavigator: React.FC = () => {
	const { isUserLoggedIn } = useSelector((state: RootState) => state.userLoginData);

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName={isUserLoggedIn === false ? 'LoginScreen' : 'SplashScreen'}
		>
			<Stack.Screen name='SplashScreen' component={SplashScreen} />
			<Stack.Screen name='LoginScreen' component={LoginScreen} />
			<Stack.Screen name='SignUpScreen' component={SignUpScreen} />
		</Stack.Navigator>
	);
};
