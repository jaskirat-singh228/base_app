import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { useNavigation, useTheme } from '@react-navigation/native';
import BaseText from 'components/base_componenets/base_text';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { LATO_BOLD, SCREEN_WIDTH } from 'utilities/constants';
import { style } from './style';

type BackWithTitleCompProps = {
	title: string;
	onBackPress?: () => void;
	right?: React.ReactNode;
};

const BackWithTitleComp: React.FC<BackWithTitleCompProps> = (props) => {
	const { title } = props;
	const theme = useTheme();
	const viewStyle = style(theme);
	const navigation = useNavigation();

	return (
		<View style={viewStyle.mainContainer}>
			<TouchableOpacity
				style={{ alignItems: 'center' }}
				onPress={props?.onBackPress ? props?.onBackPress : navigation.goBack}
			>
				<MaterialDesignIcons name={'chevron-left'} size={35} color={theme.colors.white} />
			</TouchableOpacity>
			<TouchableOpacity onPress={props?.onBackPress ? props?.onBackPress : navigation.goBack}>
				<BaseText
					style={[
						{
							maxWidth: SCREEN_WIDTH * 0.7,
							color: theme.colors.white,
							fontFamily: LATO_BOLD,
							fontSize: 20,
						},
					]}
					ellipsizeMode={'tail'}
					numberOfLines={1}
				>
					{title}
				</BaseText>
			</TouchableOpacity>
			<View style={{ flex: 1 }} />
			{(props?.right && props?.right) ?? undefined}
		</View>
	);
};

export const BackWithTitleHeader = React.memo(BackWithTitleComp);
