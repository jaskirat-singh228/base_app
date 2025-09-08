import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, TextProps } from 'react-native';
import { style } from './style';

export type BaseTextCompProps = TextProps;

const BaseTextComp: React.FC<BaseTextCompProps> = (props) => {
	const theme = useTheme();
	const viewStyle = style(theme);
	return <Text {...props} style={[viewStyle.baseText, props?.style]} />;
};

const BaseText = React.memo(BaseTextComp);
export default BaseText;
