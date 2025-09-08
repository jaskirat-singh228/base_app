import { useTheme } from '@react-navigation/native';
import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import BaseText from '../base_text';
import { style } from './style';

export type BaseTextInputCompProps = TextInputProps & {
	errorMessage?: string;
	label?: string;
};

const BaseTextInputComp: React.FC<BaseTextInputCompProps> = (props) => {
	const { errorMessage, label } = props;
	const theme = useTheme();
	const viewStyle = style(theme);
	return (
		<View style={viewStyle.mainContainer}>
			{label && <BaseText style={viewStyle.error}>{label}</BaseText>}
			<TextInput
				{...props}
				placeholderTextColor={theme.colors.inputPlaceholder}
				style={[viewStyle.textInput, props?.style]}
			/>
			{errorMessage && <BaseText style={viewStyle.error}>{errorMessage}</BaseText>}
		</View>
	);
};

const BaseTextInput = React.memo(BaseTextInputComp);
export default BaseTextInput;
