import { useTheme } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setTheme } from 'store/slices/app_slice';
import { userLogout } from 'store/slices/auth_slice';
import { BottomTabStack } from 'types/navigation_type';

type HomeScreenProps = NativeStackScreenProps<BottomTabStack, 'HomeScreen'>;

const HomeScreen: React.FC<HomeScreenProps> = () => {
	const dispatch = useDispatch();
	const { colors } = useTheme();

	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: colors.background,
			}}
		>
			<Text
				style={{
					fontFamily: 'Lato-Bold',
					fontSize: 50,
					color: colors.text,
				}}
			>
				Home Screen
			</Text>
			<Button title='Logout' onPress={() => dispatch(userLogout())} />
			<Button title='Dark Mode' onPress={() => dispatch(setTheme('dark'))} />
			<Button title='Light Mode' onPress={() => dispatch(setTheme('light'))} />
			<Button title='System Mode' onPress={() => dispatch(setTheme('system'))} />
		</View>
	);
};

export default HomeScreen;
