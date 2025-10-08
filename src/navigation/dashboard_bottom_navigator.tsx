import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { Suspense } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppStack, BottomTabStack } from 'types/navigation_type';
import { BottomTabBarIconSize, BottomTabBarLabelSize, LATO_BOLD } from 'utilities/constants';

const HomeScreen = React.lazy(() => import('screens/bottom_tabs/home'));
const ProfileScreen = React.lazy(() => import('screens/bottom_tabs/profile'));

const Loader: React.FC = () => (
	<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<ActivityIndicator size='large' />
	</View>
);

type DashboardBottomTabNavigatorProps = NativeStackScreenProps<
	AppStack,
	'DashboardBottomTabNavigator'
>;

const Tab = createBottomTabNavigator<BottomTabStack>();

const DashboardBottomTabNavigator: React.FC<DashboardBottomTabNavigatorProps> = (props) => {
	const { colors } = useTheme();
	const insets = useSafeAreaInsets();

	return (
		<Suspense fallback={<Loader />}>
			<Tab.Navigator
				safeAreaInsets={insets}
				screenOptions={{
					lazy: true,
					headerShown: false,
					tabBarStyle: { backgroundColor: colors.primary },
					tabBarLabelStyle: {
						fontSize: BottomTabBarLabelSize,
						fontFamily: LATO_BOLD,
					},
					tabBarActiveTintColor: colors.white,
					tabBarInactiveTintColor: colors.buttonDisable,
					tabBarLabelPosition: 'below-icon',
				}}
				initialRouteName='HomeScreen'
			>
				<Tab.Screen
					options={{
						tabBarLabel: 'Home',
						tabBarIcon: ({ focused }) => {
							return (
								<MaterialDesignIcons
									name='home'
									size={BottomTabBarIconSize}
									color={focused ? colors.white : colors.buttonDisable}
								/>
							);
						},
					}}
					name='HomeScreen'
					component={HomeScreen}
				/>
				<Tab.Screen
					options={{
						tabBarLabel: 'Profile',
						tabBarIcon: ({ focused }) => {
							return (
								<MaterialDesignIcons
									name='account'
									size={BottomTabBarIconSize}
									color={focused ? colors.white : colors.buttonDisable}
								/>
							);
						},
					}}
					name='ProfileScreen'
					component={ProfileScreen}
				/>
			</Tab.Navigator>
		</Suspense>
	);
};

export default DashboardBottomTabNavigator;
