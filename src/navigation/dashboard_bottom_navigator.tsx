import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import HomeScreen from 'screens/bottom_tabs/home';
import ProfileScreen from 'screens/bottom_tabs/profile';
import { AppStack, BottomTabStack } from 'types/navigation_type';

type DashboardBottomTabNavigatorProps = NativeStackScreenProps<
	AppStack,
	'DashboardBottomTabNavigator'
>;

const Tab = createBottomTabNavigator<BottomTabStack>();

const DashboardBottomTabNavigator: React.FC<DashboardBottomTabNavigatorProps> = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName='HomeScreen'
		>
			<Tab.Screen
				options={{
					tabBarLabel: 'Home',
					tabBarLabelStyle: { fontSize: 14, fontFamily: 'Lato-Bold' },
					tabBarIcon: (props) => {
						return (
							<MaterialDesignIcons
								name='home'
								size={props.size}
								color={props.color}
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
					tabBarLabelStyle: { fontSize: 14, fontFamily: 'Lato-Bold' },
					tabBarIcon: (props) => {
						return (
							<MaterialDesignIcons
								name='account'
								size={props.size}
								color={props.color}
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
