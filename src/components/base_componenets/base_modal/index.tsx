import { useTheme } from '@react-navigation/native';
import React, { useRef } from 'react';
import { Modal, ModalProps, View } from 'react-native';
import BaseButton from '../base_button';
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
	const modalRef = useRef<ModalProps | null>(null);

	return (
		<Modal style={viewStyle.modalStyle} visible={visible} onDismiss={onClose}>
			<View style={viewStyle.modalBackground}>
				<BaseButton title='press to close' onPress={() => {}} />
			</View>
		</Modal>
	);
};
const BaseModal = React.memo(BaseModalComp);
export default BaseModal;
