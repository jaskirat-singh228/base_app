import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AppStack } from 'types/navigation_type';
import DashboardBottomTabNavigator from './dashboard_bottom_navigator';

const Stack = createNativeStackNavigator<AppStack>();

export const AppNavigator: React.FC = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name='DashboardBottomTabNavigator'
				component={DashboardBottomTabNavigator}
			/>
		</Stack.Navigator>
	);
};

export default AppNavigator;
