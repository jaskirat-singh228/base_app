import { useTheme } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BaseButton from 'components/base_componenets/base_button';
import BaseText from 'components/base_componenets/base_text';
import BaseTextInput from 'components/base_componenets/base_text_input';
import AppScreenContainer from 'components/base_componenets/screen_container';
import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { ScrollView, useWindowDimensions, View } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { useAppDispatch } from 'store';
import { userLogin } from 'store/slices/auth_slice';
import { AuthStack } from 'types/navigation_type';
import { setDataToAsyncStorage } from 'utilities/async_storage';
import { AsyncStorageKeys } from 'utilities/async_storage_keys';
import { isValidEmail, isValidPassword } from 'utilities/validators';
import { style } from './style';

type TInputData = {
	email: string;
	password: string;
};

type LoginScreenProps = NativeStackScreenProps<AuthStack, 'LoginScreen'>;

const LoginScreen: React.FC<LoginScreenProps> = (props) => {
	const theme = useTheme();
	const viewStyle = style(theme);
	const dispatch = useAppDispatch();
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
	const { height, width } = useWindowDimensions();
	const isPortrait = height > width;

	const {
		control,
		reset,
		handleSubmit,
		setValue,
		setError,
		watch,
		formState: { errors },
	} = useForm<TInputData>();

	const submitClickHandler: SubmitHandler<TInputData> = React.useCallback(async (values) => {
		const email = (values?.email ?? '').trim();
		const password = (values?.password ?? '').trim();
		const userData = { email: email, password: password };

		// Email validation
		if (!isValidEmail(email)) {
			return setError('email', { message: 'Invalid Email!' });
		}

		// Password validation
		if (!isValidPassword(password)) {
			return setError('password', { message: 'Invalid Password!' });
		}

		dispatch(userLogin(userData));
		await setDataToAsyncStorage(AsyncStorageKeys.USER_LOGIN_DATA, JSON.stringify(userData));
	}, []);

	return (
		<AppScreenContainer showStatusBar={false} showBottomBar={false}>
			<KeyboardAvoidingView
				keyboardVerticalOffset={isPortrait ? theme.sizes.height * 0.06 : -10}
				behavior='padding'
				style={viewStyle.mainContainer}
			>
				<ScrollView contentContainerStyle={viewStyle.scrollViewContent}>
					<Controller
						control={control}
						name='email'
						rules={{ required: 'Email cannot be empty!' }}
						render={({ field: { onBlur, value } }) => (
							<BaseTextInput
								label={watch('email') ? 'Email' : ''}
								value={value}
								onChangeText={(text) => {
									setValue('email', text);
									setError('email', { message: '' });
								}}
								onBlur={onBlur}
								placeholder={'Enter your email...'}
								placeholderTextColor={
									errors.email?.message
										? theme.colors.error
										: theme.colors.inputPlaceholder
								}
								errorMessage={errors?.email?.message ?? ''}
								style={{
									borderColor: errors.email?.message
										? theme.colors.error
										: theme.colors.border,
									color: errors.email?.message
										? theme.colors.error
										: theme.colors.text,
								}}
							/>
						)}
					/>
					<Controller
						control={control}
						name='password'
						rules={{ required: 'Password cannot be empty!' }}
						render={({ field: { onBlur, value } }) => (
							<BaseTextInput
								label={watch('password') ? 'Password' : ''}
								value={value}
								onChangeText={(text) => {
									setValue('password', text);
									setError('password', { message: '' });
								}}
								onBlur={onBlur}
								placeholder={'Enter your password...'}
								placeholderTextColor={
									errors.password?.message
										? theme.colors.error
										: theme.colors.inputPlaceholder
								}
								errorMessage={errors?.password?.message ?? ''}
								style={{
									borderColor: errors.password?.message
										? theme.colors.error
										: theme.colors.border,
									color: errors.password?.message
										? theme.colors.error
										: theme.colors.text,
								}}
							/>
						)}
					/>
				</ScrollView>
				<View style={viewStyle.buttonContainer}>
					<BaseButton title='Login' onPress={handleSubmit(submitClickHandler)} />
					<View style={viewStyle.signUpContainer}>
						<BaseText style={viewStyle.signUpText}>Don't have any account?</BaseText>
						<BaseText
							onPress={() => props.navigation.navigate('RegisterScreen')}
							style={[
								viewStyle.signUpText,
								{
									color: theme.colors.primary,
									marginLeft: 5,
								},
							]}
						>
							Sign Up
						</BaseText>
					</View>
				</View>
			</KeyboardAvoidingView>
		</AppScreenContainer>
	);
};

export default LoginScreen;
