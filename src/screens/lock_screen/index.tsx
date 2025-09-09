import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { useTheme } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BaseText from 'components/base_componenets/base_text';
import useBiometrics from 'hooks/useBiometrics';
import React from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import { AppStack } from 'types/navigation_type';
import { style } from './style';

type LockScreenProps = NativeStackScreenProps<AppStack, 'LockScreen'>;

const LockScreen: React.FC<LockScreenProps> = (props) => {
	const correctPin = '';
	const onUnlock = () => {};
	const theme = useTheme();
	const viewStyle = style(theme);
	const [pin, setPin] = React.useState<String>('');
	const { isBiometricAvailable, triggerBiometrics } = useBiometrics();

	const handleBiometric = async () => {
		if (isBiometricAvailable) {
			const { success, error } = await triggerBiometrics();
			if (error) return console.log('Error', error);
			if (success) {
				props?.navigation?.navigate('DashboardBottomTabNavigator');
			}
		}
	};

	const handlePress = (digit: string) => {
		if (pin.length < 4) {
			setPin(pin + digit);
		}
	};

	React.useEffect(() => {
		handleSubmit();
	}, [pin, correctPin]);

	const handleSubmit = () => {
		if (pin.length < 4) return;
		if (pin === correctPin && pin.length === 4) {
			onUnlock();
		} else {
			Alert.alert('Incorrect PIN', 'Please try again');
			setPin('');
		}
	};

	return (
		<View style={viewStyle.container}>
			<View style={viewStyle.pinMainContainer}>
				<BaseText style={viewStyle.title}>Enter PIN</BaseText>

				{/* PIN circles */}
				<View style={viewStyle.pinContainer}>
					{[0, 1, 2, 3].map((i) => (
						<View
							key={i}
							style={[viewStyle.pinDot, pin.length > i && viewStyle.filledDot]}
						/>
					))}
				</View>
			</View>

			{/* Custom keypad */}
			<View style={viewStyle.keypadConatiner}>
				{['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((digit) => (
					<TouchableOpacity
						key={digit}
						style={viewStyle.key}
						onPress={() => handlePress(digit)}
					>
						<BaseText style={viewStyle.keyText}>{digit}</BaseText>
					</TouchableOpacity>
				))}

				{/* Biometric Button */}
				{isBiometricAvailable ? (
					<TouchableOpacity style={viewStyle.key} onPress={handleBiometric}>
						<MaterialDesignIcons name='face-recognition' style={viewStyle.keyText} />
					</TouchableOpacity>
				) : (
					<View style={{ width: '30%', height: 65 }} />
				)}

				{/* Zero */}
				<TouchableOpacity style={viewStyle.key} onPress={() => handlePress('0')}>
					<BaseText style={viewStyle.keyText}>0</BaseText>
				</TouchableOpacity>

				{/* Delete */}
				<TouchableOpacity style={viewStyle.key} onPress={() => setPin(pin.slice(0, -1))}>
					<MaterialDesignIcons name='backspace' color={theme.colors.white} size={20} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default LockScreen;
