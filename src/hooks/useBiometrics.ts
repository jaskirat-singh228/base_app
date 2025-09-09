import React, { useState } from 'react';
import ReactNativeBiometrics from 'react-native-biometrics';

const rnBiometrics = new ReactNativeBiometrics();

const useBiometrics = () => {
	const [isBiometricAvailable, setIsBiometricAvailable] = useState<boolean>(false);

	React.useEffect(() => {
		checkBiometrics();
	}, []);

	const checkBiometrics = async () => {
		const { available, biometryType } = await rnBiometrics.isSensorAvailable();
		setIsBiometricAvailable(available && !!biometryType);
	};

	const triggerBiometrics = async () => {
		const { biometryType } = await rnBiometrics.isSensorAvailable();
		const { success, error } = await rnBiometrics.simplePrompt({
			promptMessage: biometryType === 'FaceID' ? 'Confirm Face ID' : 'Confirm Fingerpeint',
		});
		return { success, error };
	};

	return { isBiometricAvailable, triggerBiometrics };
};

export default useBiometrics;
