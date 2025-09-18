import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeScreen from 'screens/bottom_tabs/home';
import ProfileScreen from 'screens/bottom_tabs/profile';
import { AppStack, BottomTabStack } from 'types/navigation_type';
import { BottomTabBarIconSize, BottomTabBarLabelSize, LATO_BOLD } from 'utilities/constants';

type DashboardBottomTabNavigatorProps = NativeStackScreenProps<
	AppStack,
	'DashboardBottomTabNavigator'
>;

const Tab = createBottomTabNavigator<BottomTabStack>();

const DashboardBottomTabNavigator: React.FC<DashboardBottomTabNavigatorProps> = (props) => {
	const { colors } = useTheme();
	const insets = useSafeAreaInsets();

	return (
		<Tab.Navigator
			safeAreaInsets={insets}
			screenOptions={{
				headerShown: false,
				tabBarStyle: { backgroundColor: colors.primary },
				tabBarLabelStyle: {
					fontSize: BottomTabBarLabelSize,
					fontFamily: LATO_BOLD,
				},
				tabBarActiveTintColor: colors.white,
				tabBarInactiveTintColor: colors.buttonDisable,
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
				// initialParams={{ message: message }}
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
	);
};

export default DashboardBottomTabNavigator;
