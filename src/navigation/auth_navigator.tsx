import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from 'screens/authentication/login';
import RegisterScreen from 'screens/authentication/register';
import SplashScreen from 'screens/authentication/splash';
import { useAppSelector } from 'store';
import { AuthStack } from 'types/navigation_type';

const Stack = createNativeStackNavigator<AuthStack>();

export const AuthNavigator: React.FC = () => {
	const { isUserLoggedIn } = useAppSelector((state) => state.authData);

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				statusBarStyle: 'dark',
			}}
			initialRouteName={isUserLoggedIn === false ? 'LoginScreen' : 'SplashScreen'}
		>
			<Stack.Screen name='SplashScreen' component={SplashScreen} />
			<Stack.Screen name='LoginScreen' component={LoginScreen} />
			<Stack.Screen name='RegisterScreen' component={RegisterScreen} />
		</Stack.Navigator>
	);
};
