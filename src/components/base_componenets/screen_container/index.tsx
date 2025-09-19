import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaViewProps, useSafeAreaInsets } from 'react-native-safe-area-context';
import { style } from './style';

type AppScreenContainerProps = SafeAreaViewProps & {
	children: React.ReactNode;
	showStatusBar?: boolean;
	showBottomBar?: boolean;
};

const AppScreenContainer: React.FC<AppScreenContainerProps> = (props) => {
	const { showStatusBar = true, showBottomBar = true } = props;
	const theme = useTheme();
	const insets = useSafeAreaInsets();
	const viewStyle = style(theme, insets);
	console.log(
		'insets:Top,',
		insets.top,
		'insets:Bottom,',
		insets.bottom,
		'insets:Left,',
		insets.left,
		'insets:Right,',
		insets.right,
	);

	return (
		<View style={viewStyle.mainContainer}>
			{showStatusBar ? <View style={viewStyle.statusBar} /> : false}
			<View {...props} style={[viewStyle.children, props.style]}>
				{props?.children ?? undefined}
			</View>
			{showBottomBar ? <View style={viewStyle.bottomBar} /> : false}
		</View>
	);
};

export default AppScreenContainer;
