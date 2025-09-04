import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import AppNavigator from './app_navigator';
import { AuthNavigator } from './auth_navigator';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
	const { isUserLoggedIn } = useSelector((state: RootState) => state.userLoginData);

	return (
		<NavigationContainer>
			<RootStack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				{isUserLoggedIn ? (
					<RootStack.Screen name={'AppNavigator'} component={AppNavigator} />
				) : (
					<RootStack.Screen name={'AuthNavigator'} component={AuthNavigator} />
				)}
			</RootStack.Navigator>
		</NavigationContainer>
	);
};

export default RootNavigator;

const styles = StyleSheet.create({});
