import { useTheme } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BaseButton from 'components/base_componenets/base_button';
import AppScreenContainer from 'components/base_componenets/screen_container';
import { BackWithTitleHeader } from 'components/molecules/back_with_title_view';
import React from 'react';
import { Keyboard, KeyboardAvoidingView, Pressable } from 'react-native';
import { AuthStack } from 'types/navigation_type';
import { style } from './style';

type RegisterScreenProps = NativeStackScreenProps<AuthStack, 'RegisterScreen'>;

const RegisterScreen: React.FC<RegisterScreenProps> = (props) => {
	const theme = useTheme();
	const viewStyle = style(theme);
	return (
		<AppScreenContainer showBottomBar={false}>
			<BackWithTitleHeader title='Back' />
			<KeyboardAvoidingView behavior={'padding'} style={viewStyle.keyboardAvoidingView}>
				<Pressable style={viewStyle.mainContainer} onPress={Keyboard.dismiss}>
					<BaseButton title='Register' />
				</Pressable>
			</KeyboardAvoidingView>
		</AppScreenContainer>
	);
};

export default RegisterScreen;
