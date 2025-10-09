import { useTheme } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BaseText from 'components/base_componenets/base_text';
import AppScreenContainer from 'components/base_componenets/screen_container';
import React from 'react';
import { BottomTabStack } from 'types/navigation_type';
import { style } from './style';

type HomeScreenProps = NativeStackScreenProps<BottomTabStack, 'HomeScreen'>;

const HomeScreen: React.FC<HomeScreenProps> = () => {
	const theme = useTheme();
	const viewStyle = style(theme);

	return (
		<AppScreenContainer style={viewStyle.mainContainer} showBottomBar={false}>
			<BaseText style={viewStyle.emailText}>Welcome to Home Page ❤️</BaseText>
		</AppScreenContainer>
	);
};

export default HomeScreen;
