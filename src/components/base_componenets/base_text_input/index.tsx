import { useTheme } from '@react-navigation/native';
import React from 'react';
import { TextInput, TextInputProps, useWindowDimensions, View } from 'react-native';
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
	const { height, width } = useWindowDimensions();
	const isPortrait = height > width;

	return (
		<View style={viewStyle.mainContainer}>
			{label && <BaseText style={viewStyle.label}>{label}</BaseText>}
			<TextInput
				placeholderTextColor={theme.colors.inputPlaceholder}
				{...props}
				style={[
					viewStyle.textInput,
					{
						height: isPortrait ? height * 0.055 : height * 0.13,
						width: isPortrait ? width * 0.9 : width * 0.85,
					},
					props?.style,
				]}
			/>
			{errorMessage && (
				<BaseText style={[viewStyle.label, { color: theme.colors.error }]}>
					{errorMessage}
				</BaseText>
			)}
		</View>
	);
};

const BaseTextInput = React.memo(BaseTextInputComp);
export default BaseTextInput;
