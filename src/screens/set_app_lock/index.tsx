import { useTheme } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BackWithTitleHeader } from 'components/back_with_title_view';
import BaseText from 'components/base_componenets/base_text';
import FullScreenContainer from 'components/full_screen_container';
import CustomNumberKeyboard from 'components/number_keyboard';
import React from 'react';
import { View } from 'react-native';
import { useAppDispatch } from 'store';
import { setAppLock } from 'store/slices/app_slice';
import { AppStack } from 'types/navigation_type';
import { setDataToAsyncStorage } from 'utilities/async_storage';
import { AsyncStorageKeys } from 'utilities/async_storage_keys';
import { style } from './style';

type SetAppLockScreenProps = NativeStackScreenProps<AppStack, 'SetAppLockScreen'>;

const SetAppLockScreen: React.FC<SetAppLockScreenProps> = (props) => {
	const theme = useTheme();
	const viewStyle = style(theme);
	const dispatch = useAppDispatch();
	const [pin, setPin] = React.useState<string>('');
	const [confirmPin, setConfirmPin] = React.useState<string>('');
	const isPinConfirmed = pin.length === 4;
	const isConfirmPinConfirmed = confirmPin.length === 4;
	const showPinValue = pin.length === 4 ? confirmPin : pin;

	// checks for pin authentication
	const isValidPIN = React.useMemo(() => {
		if (confirmPin.length !== 4) return null;
		return confirmPin === pin;
	}, [pin, confirmPin]);

	React.useEffect(() => {
		chackAndSavePIN();
	}, [pin, confirmPin]);

	const chackAndSavePIN = async () => {
		if (isPinConfirmed && isConfirmPinConfirmed) {
			if (pin === confirmPin) {
				await setDataToAsyncStorage(AsyncStorageKeys.APP_LOCK, confirmPin);
				dispatch(setAppLock(confirmPin));
				props.navigation.goBack();
			} else {
				setTimeout(() => {
					setPin('');
					setConfirmPin('');
				}, 1000);
			}
		}
	};

	const onPressDigit = React.useCallback(
		(digit: string) => {
			if (!isPinConfirmed) {
				setPin(pin + digit);
			}
			if (isPinConfirmed && !isConfirmPinConfirmed) {
				setConfirmPin(confirmPin + digit);
			}
		},
		[pin, confirmPin],
	);

	const onPressClear = React.useCallback(() => {
		if (pin.length < 4) {
			setPin(pin.slice(0, -1));
		} else {
			setConfirmPin(confirmPin.slice(0, -1));
		}
	}, [pin, confirmPin]);

	return (
		<FullScreenContainer>
			<BackWithTitleHeader title='Set App Lock' />
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
					{isValidPIN === false
						? 'Incorrect PIN!'
						: isPinConfirmed
						? 'Confirm PIN'
						: 'Enter PIN'}
				</BaseText>
				{/* PIN circles */}
				<View style={viewStyle.pinContainer}>
					{[0, 1, 2, 3].map((_, index) => (
						<View
							key={index}
							style={[
								viewStyle.pinDot,
								showPinValue.length > index && {
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
			{/* Custom Number Keyboard */}
			<CustomNumberKeyboard onDigitPress={onPressDigit} onClearPress={onPressClear} />
		</FullScreenContainer>
	);
};
export default SetAppLockScreen;
