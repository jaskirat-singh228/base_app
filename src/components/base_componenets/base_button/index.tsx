import { useTheme } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import BaseText from '../base_text';
import { style } from './style';

export type BaseButtonCompProps = TouchableOpacityProps & {
	title: string;
	loading?: boolean;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
};

const BaseButtonComp: React.FC<BaseButtonCompProps> = (props) => {
	const { title, loading = false, leftIcon, rightIcon } = props;
	const theme = useTheme();
	const viewStyle = style(theme);

	return (
		<TouchableOpacity style={[viewStyle.baseButton, props?.style]} {...props}>
			{loading ? (
				<ActivityIndicator color={theme.colors.white} size={50} />
			) : (
				<View style={viewStyle.iconContainer}>
					{leftIcon && leftIcon}
					<BaseText style={viewStyle.title}>{title}</BaseText>
					{rightIcon && rightIcon}
				</View>
			)}
		</TouchableOpacity>
	);
};

const BaseButton = React.memo(BaseButtonComp);
export default BaseButton;
