import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Modal } from 'react-native';
import BaseText from '../base_text';
import { style } from './style';

type BaseModalProps = {
	visible: boolean;
	// children: React.ReactNode;
	onClose: () => void;
};

const BaseModalComp: React.FC<BaseModalProps> = (props) => {
	const { visible, onClose } = props;
	const theme = useTheme();
	const viewStyle = style(theme);

	return (
		<Modal style={viewStyle.screenContainer} visible={visible} onDismiss={onClose}>
			<BaseText>dcgvbcjhcsd</BaseText>
		</Modal>
	);
};
const BaseModal = React.memo(BaseModalComp);
export default BaseModal;
