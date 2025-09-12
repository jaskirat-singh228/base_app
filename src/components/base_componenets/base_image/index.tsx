import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Image, ImageProps } from 'react-native';
import { style } from './style';

export type BaseImageCompProps = ImageProps;

const BaseImageComp: React.FC<BaseImageCompProps> = (props) => {
	const theme = useTheme();
	const viewStyle = style(theme);
	return <Image style={viewStyle.image} {...props} resizeMode='contain' />;
};

const BaseImage = React.memo(BaseImageComp);
export default BaseImage;
