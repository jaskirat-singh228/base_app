import { useTheme } from '@react-navigation/native';
import React, { useEffect } from 'react';
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

	useEffect(() => {
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
	}, [insets]);

	return (
		<View style={viewStyle.mainContainer}>
			<View
				style={[
					viewStyle.statusBar,
					{
						backgroundColor: showStatusBar
							? theme.colors.primary
							: theme.colors.background,
					},
				]}
			/>
			<View {...props} style={[viewStyle.children, props.style]}>
				{props?.children ?? undefined}
			</View>
			<View
				style={[
					viewStyle.bottomBar,
					{
						backgroundColor: showStatusBar
							? theme.colors.primary
							: theme.colors.background,
					},
				]}
			/>
		</View>
	);
};

export default AppScreenContainer;
