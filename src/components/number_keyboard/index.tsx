import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { useTheme } from '@react-navigation/native';
import BaseText from 'components/base_componenets/base_text';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { style } from './style';

type CustomNumberKeyboardCompProps = {
	onDigitPress: (digit: string) => void;
	onClearPress: () => void;
	onBiometricPress?: () => void;
	isBiometricEnalbed?: boolean;
};

const CustomNumberKeyboardComp = (props: CustomNumberKeyboardCompProps) => {
	const { onDigitPress, onClearPress, onBiometricPress, isBiometricEnalbed } = props;
	const theme = useTheme();
	const viewStyle = style(theme);

	const handleDigitPress = (digit: string) => onDigitPress(digit);

	const handleClearPress = () => onClearPress();

	return (
		<View style={viewStyle.keypadConatiner}>
			{['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((digit) => (
				<TouchableOpacity
					key={digit}
					style={viewStyle.key}
					onPress={() => handleDigitPress(digit)}
				>
					<BaseText style={viewStyle.keyText}>{digit}</BaseText>
				</TouchableOpacity>
			))}
			{/* Biometric Or Empty View */}
			{isBiometricEnalbed ? (
				<TouchableOpacity style={viewStyle.key} onPress={onBiometricPress}>
					<MaterialDesignIcons name='face-recognition' style={viewStyle.keyText} />
				</TouchableOpacity>
			) : (
				<View style={{ width: '30%', height: 65 }} />
			)}
			{/* Zero */}
			<TouchableOpacity style={viewStyle.key} onPress={() => handleDigitPress('0')}>
				<BaseText style={viewStyle.keyText}>0</BaseText>
			</TouchableOpacity>
			{/* Delete */}
			<TouchableOpacity style={viewStyle.key} onPress={handleClearPress}>
				<MaterialDesignIcons name='backspace' color={theme.colors.white} size={20} />
			</TouchableOpacity>
		</View>
	);
};
const CustomNumberKeyboard = React.memo(CustomNumberKeyboardComp);
export default CustomNumberKeyboard;
