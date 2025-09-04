import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { AuthStack } from 'types/navigation_type';

type SignUpScreenProps = NativeStackScreenProps<AuthStack, 'SignUpScreen'>;

const SignUpScreen: React.FC<SignUpScreenProps> = (props) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>SignUpScreen</Text>
			<Button title='Sign Up' onPress={() => {}} />
		</View>
	);
};

export default SignUpScreen;
