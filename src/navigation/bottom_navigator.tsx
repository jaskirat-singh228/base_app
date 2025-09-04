import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import HomeScreen from 'screens/bottom_tabs/home';
import ProfileScreen from 'screens/bottom_tabs/profile';
import { AppStack, BottomTabStack } from 'types/navigation_type';

type BottomTabNavigatorProps = NativeStackScreenProps<AppStack, 'BottomTabNavigator'>;

const Tab = createBottomTabNavigator<BottomTabStack>();

const BottomTabNavigator: React.FC<BottomTabNavigatorProps> = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName='HomeScreen'
		>
			<Tab.Screen name='HomeScreen' component={HomeScreen} />
			<Tab.Screen name='ProfileScreen' component={ProfileScreen} />
		</Tab.Navigator>
	);
};

export default BottomTabNavigator;
