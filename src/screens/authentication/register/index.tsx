import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { AuthStack } from 'types/navigation_type';

type RegisterScreenProps = NativeStackScreenProps<AuthStack, 'RegisterScreen'>;

const RegisterScreen: React.FC<RegisterScreenProps> = (props) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>RegisterScreen</Text>
			<Button title='Sign Up' onPress={() => {}} />
		</View>
	);
};

export default RegisterScreen;
