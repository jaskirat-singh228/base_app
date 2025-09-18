import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AppLockScreen from 'screens/app_lock';
import SetAppLockScreen from 'screens/set_app_lock';
import { useAppSelector } from 'store';
import { AppStack } from 'types/navigation_type';
import DashboardBottomTabNavigator from './dashboard_bottom_navigator';

const Stack = createNativeStackNavigator<AppStack>();

export const AppNavigator: React.FC = () => {
	const { appLockPIN } = useAppSelector((state) => state.appData);

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				statusBarStyle: 'light',
			}}
			initialRouteName={!!appLockPIN ? 'AppLockScreen' : 'DashboardBottomTabNavigator'}
		>
			<Stack.Screen name='AppLockScreen' component={AppLockScreen} />
			<Stack.Screen
				name='DashboardBottomTabNavigator'
				component={DashboardBottomTabNavigator}
			/>
			<Stack.Screen name='SetAppLockScreen' component={SetAppLockScreen} />
		</Stack.Navigator>
	);
};

export default AppNavigator;
