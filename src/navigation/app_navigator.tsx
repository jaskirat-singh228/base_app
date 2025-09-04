import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AppStack } from 'types/navigation_type';
import BottomTabNavigator from './bottom_navigator';

const Stack = createNativeStackNavigator<AppStack>();

export const AppNavigator: React.FC = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name='BottomTabNavigator' component={BottomTabNavigator} />
		</Stack.Navigator>
	);
};

export default AppNavigator;
