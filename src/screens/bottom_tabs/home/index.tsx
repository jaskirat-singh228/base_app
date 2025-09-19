import { useTheme } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BaseButton from 'components/base_componenets/base_button';
import BaseText from 'components/base_componenets/base_text';
import BaseTextInput from 'components/base_componenets/base_text_input';
import AppScreenContainer from 'components/base_componenets/screen_container';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { BottomTabStack } from 'types/navigation_type';
import { style } from './style';

type HomeScreenProps = NativeStackScreenProps<BottomTabStack, 'HomeScreen'>;

const CompA = forwardRef((props, ref) => {
	const [text, setText] = React.useState<string>('');
	useImperativeHandle(ref, () => ({
		reset: () => setText(''),
		getValue: () => text,
	}));

	return (
		<BaseTextInput
			value={text}
			onChangeText={(text) => setText(text)}
			placeholder='Enter Value....'
		/>
	);
});

const HomeScreen: React.FC<HomeScreenProps> = () => {
	const theme = useTheme();
	const viewStyle = style(theme);
	const counterRef = useRef<any>(null);

	return (
		<AppScreenContainer style={viewStyle.mainContainer} showBottomBar={false}>
			<BaseText style={viewStyle.emailText}>Welcome to Home Page ❤️</BaseText>
			<CompA ref={counterRef} />
			<BaseButton title='Reset' onPress={() => counterRef.current.reset()} />
		</AppScreenContainer>
	);
};

export default HomeScreen;
