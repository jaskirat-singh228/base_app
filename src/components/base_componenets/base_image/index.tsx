import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Image, ImageProps } from 'react-native';
import { style } from './style';

export type BaseImageCompProps = ImageProps;

const BaseImageComp: React.FC<BaseImageCompProps> = (props) => {
	const theme = useTheme();
	const viewStyle = style(theme);
	return <Image {...props} style={[viewStyle.image, props?.style]} resizeMode='cover' />;
};

const BaseImage = React.memo(BaseImageComp);
export default BaseImage;
