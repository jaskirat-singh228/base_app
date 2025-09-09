import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BaseButton from 'components/base_componenets/base_button';
import React from 'react';
import { Button, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setTheme } from 'store/slices/app_slice';
import { userLogout } from 'store/slices/auth_slice';
import { BottomTabStack } from 'types/navigation_type';

type HomeScreenProps = NativeStackScreenProps<BottomTabStack, 'HomeScreen'>;

const HomeScreen: React.FC<HomeScreenProps> = () => {
	const dispatch = useDispatch();

	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			{/* <BaseTextInput placeholder='Enter...' style={{}} /> */}
			{/* <BaseImage source={require('assets/images/parrot.jpg')} /> */}
			<BaseButton title='Logout' onPress={() => dispatch(userLogout())} />
			<Button title='Dark Mode' onPress={() => dispatch(setTheme('dark'))} />
			<Button title='Light Mode' onPress={() => dispatch(setTheme('light'))} />
			<Button title='System Mode' onPress={() => dispatch(setTheme('system'))} />
		</View>
	);
};

export default HomeScreen;
