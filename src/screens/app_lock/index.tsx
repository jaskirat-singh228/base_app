import { useTheme } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BaseText from 'components/base_componenets/base_text';
import CustomNumberKeyboard from 'components/number_keyboard';
import useBiometrics from 'hooks/useBiometrics';
import React from 'react';
import { View } from 'react-native';
import { useAppDispatch, useAppSelector } from 'store';
import { setAppLock, setBiometric } from 'store/slices/app_slice';
import { AppStack } from 'types/navigation_type';
import { getDataFromAsyncStorage, setDataToAsyncStorage } from 'utilities/async_storage';
import { AsyncStorageKeys } from 'utilities/async_storage_keys';
import { IS_BIOMETRIC_ENABLED } from 'utilities/constants';
import { style } from './style';

type AppLockScreenProps = NativeStackScreenProps<AppStack, 'AppLockScreen'>;

const AppLockScreen: React.FC<AppLockScreenProps> = (props) => {
	const theme = useTheme();
	const viewStyle = style(theme);
	const dispatch = useAppDispatch();
	const { appLockPIN } = useAppSelector((state) => state.appData);
	const { triggerBiometrics } = useBiometrics();
	const [pin, setPin] = React.useState<string>('');
	const [isBiometricEnalbed, setIsBiometricEnabled] = React.useState<boolean>(false);

	const isPinConfirmed = pin.length === 4;

	// checks for pin authentication
	const isValidPIN = React.useMemo(() => {
		if (pin.length !== 4) return null;
		return appLockPIN === pin;
	}, [pin, appLockPIN]);

	React.useEffect(() => {
		checkIsBiometric();
	}, []);

	React.useEffect(() => {
		handleSubmit();
	}, [pin]);

	const checkIsBiometric = async () => {
		const isBiometric = await getDataFromAsyncStorage(AsyncStorageKeys.IS_BIOMETRIC_ENABLED);

		dispatch(setBiometric(isBiometric === IS_BIOMETRIC_ENABLED.ENABLED));
		setIsBiometricEnabled(isBiometric === IS_BIOMETRIC_ENABLED.ENABLED);

		if (isBiometric === IS_BIOMETRIC_ENABLED.ENABLED) handleBiometric();
	};

	const handleSubmit = async () => {
		if (pin.length < 4) return;
		if (isValidPIN) {
			dispatch(setAppLock(pin));
			await setDataToAsyncStorage(AsyncStorageKeys.APP_LOCK_PIN, pin);
			props.navigation.navigate('DashboardBottomTabNavigator');
		} else {
			setTimeout(async () => {
				setPin('');
				dispatch(setAppLock(''));
				await setDataToAsyncStorage(AsyncStorageKeys.APP_LOCK_PIN, '');
			}, 1000);
		}
	};
	const handleBiometric = async () => {
		const { success } = await triggerBiometrics();
		if (success) {
			dispatch(setBiometric(true));
			await setDataToAsyncStorage(
				AsyncStorageKeys.IS_BIOMETRIC_ENABLED,
				IS_BIOMETRIC_ENABLED.ENABLED,
			);
			props.navigation.navigate('DashboardBottomTabNavigator');
		}
	};

	const onPressDigit = React.useCallback(
		(digit: string) => {
			if (!isPinConfirmed) {
				setPin(pin + digit);
			}
		},
		[pin],
	);

	const onPressClear = React.useCallback(() => {
		if (pin.length < 4) {
			setPin(pin.slice(0, -1));
		}
	}, [pin]);

	return (
		<View style={viewStyle.container}>
			<View style={viewStyle.pinMainContainer}>
				<BaseText
					style={[
						viewStyle.title,
						{
							color:
								isValidPIN === false ? theme.colors.error : theme.colors.indicator,
						},
					]}
				>
					{isValidPIN === false ? 'Incorrect Pin' : 'Enter Pin'}
				</BaseText>

				{/* PIN circles */}
				<View style={viewStyle.pinContainer}>
					{[0, 1, 2, 3].map((_, index) => (
						<View
							key={index}
							style={[
								viewStyle.pinDot,
								pin.length > index && {
									backgroundColor:
										isValidPIN === false
											? theme.colors.error
											: theme.colors.primary,
									borderColor:
										isValidPIN === false
											? theme.colors.error
											: theme.colors.primary,
								},
							]}
						/>
					))}
				</View>
			</View>

			{/* Custom Number Keypad */}
			<CustomNumberKeyboard
				isBiometricEnalbed={isBiometricEnalbed}
				onBiometricPress={handleBiometric}
				onDigitPress={onPressDigit}
				onClearPress={onPressClear}
			/>
		</View>
	);
};

export default AppLockScreen;
