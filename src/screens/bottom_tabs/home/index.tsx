import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { userLogout } from 'store/slices/auth_slice';
import { BottomTabStack } from 'types/navigation_type';

type HomeScreenProps = NativeStackScreenProps<BottomTabStack, 'HomeScreen'>;

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
	const dispatch = useDispatch();

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Button
				title='Logout'
				onPress={() => {
					dispatch(userLogout());
					console.log('Successfuly logout ✅');
				}}
			/>
		</View>
	);
};

export default HomeScreen;
