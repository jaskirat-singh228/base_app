import { useTheme } from '@react-navigation/native';
import React from 'react';
import {
	ActivityIndicator,
	TouchableOpacity,
	TouchableOpacityProps,
	useWindowDimensions,
	View,
} from 'react-native';
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
	const { height, width } = useWindowDimensions();
	const isPortrait = height > width;

	return (
		<TouchableOpacity
			{...props}
			style={[
				viewStyle.baseButton,
				{
					height: isPortrait ? height * 0.055 : height * 0.13,
					width: isPortrait ? width * 0.9 : width * 0.85,
				},
				props?.style,
			]}
		>
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
