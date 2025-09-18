import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { useAppSelector } from 'store';
import { LATO_BOLD, LATO_REGULAR } from 'utilities/constants';
import { darkThemeColors, lightThemeColors } from 'utilities/theme';
import AppNavigator from './app_navigator';
import { AuthNavigator } from './auth_navigator';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
	const { isUserLoggedIn } = useAppSelector((state) => state.authData);
	const { theme } = useAppSelector((state) => state.appData);

	const systemTheme = useColorScheme();
	const isDarkTheme = React.useMemo(() => {
		if (theme === 'system') {
			return systemTheme === 'dark';
		} else {
			return theme === 'dark';
		}
	}, [systemTheme, theme]);

	return (
		<NavigationContainer
			theme={{
				colors: isDarkTheme ? darkThemeColors : lightThemeColors,
				dark: isDarkTheme,
				fonts: {
					regular: { fontFamily: LATO_REGULAR, fontWeight: '400' },
					medium: { fontFamily: LATO_REGULAR, fontWeight: '500' },
					bold: { fontFamily: LATO_BOLD, fontWeight: '700' },
					heavy: { fontFamily: LATO_BOLD, fontWeight: 'bold' },
				},
			}}
		>
			<RootStack.Navigator screenOptions={{ headerShown: false }}>
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
