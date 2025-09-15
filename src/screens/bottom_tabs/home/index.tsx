import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BaseButton from 'components/base_componenets/base_button';
import React, { useCallback, useState } from 'react';
import { Button, View } from 'react-native';
import { useAppDispatch } from 'store';
import { resetAppData, setTheme } from 'store/slices/app_slice';
import { userLogout } from 'store/slices/auth_slice';
import { BottomTabStack } from 'types/navigation_type';
import { removeDataFromAsyncStorage, setDataToAsyncStorage } from 'utilities/async_storage';
import { AsyncStorageKeys } from 'utilities/async_storage_keys';

type HomeScreenProps = NativeStackScreenProps<BottomTabStack, 'HomeScreen'>;

const HomeScreen: React.FC<HomeScreenProps> = () => {
	const dispatch = useAppDispatch();
	const [show, setShow] = useState(true);
	const [visible, setVisible] = useState(true);

	const logoutHandler = useCallback(async () => {
		await removeDataFromAsyncStorage();
		dispatch(userLogout());
		dispatch(resetAppData());
	}, []);

	const darkModeHandler = useCallback(async () => {
		await setDataToAsyncStorage(AsyncStorageKeys.DARK_THEME, 'darkTheme');
		dispatch(setTheme('dark'));
	}, []);

	const lightModeHandler = useCallback(async () => {
		await setDataToAsyncStorage(AsyncStorageKeys.DARK_THEME, 'lightTheme');
		dispatch(setTheme('light'));
	}, []);

	const systemModeHandler = useCallback(async () => {
		await setDataToAsyncStorage(AsyncStorageKeys.DARK_THEME, 'systemTheme');
		dispatch(setTheme('system'));
	}, []);

	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			{/* <Button title='Toggle Box' onPress={() => setShow(!show)} />

			<View>
				<Button title='Press' onPress={() => setVisible((prev) => !prev)}></Button>
				<AnimatePresence>
					{visible && (
						<MotiView
							from={{ opacity: visible ? 1 : 0 }}
							exit={{ opacity: visible ? 0 : 1 }}
							style={{ height: 100, width: 100, backgroundColor: 'red' }}
							exitTransition={{ duration: 2000 }}
						/>
					)}
				</AnimatePresence>
			</View>

			<AnimatePresence>
				{show && (
					<MotiView
						aria-busy
						from={{ opacity: 0, translateY: 20 }}
						animate={{ opacity: 1, translateY: 0 }}
						exit={{ opacity: 0, translateY: -20 }}
						transition={{ duration: 1000 }}
						style={{
							width: 120,
							height: 120,
							backgroundColor: 'purple',
							marginTop: 20,
							borderRadius: 20,
						}}
					/>
				)}
			</AnimatePresence> */}
			{/* setDataToAsyncStorage(AsyncStorageKeys.DARK_THEME, action.payload); */}
			<BaseButton title='Logout' onPress={logoutHandler} />
			<Button title='Dark Mode' onPress={darkModeHandler} />
			<Button title='Light Mode' onPress={lightModeHandler} />
			<Button title='System Mode' onPress={systemModeHandler} />
		</View>
	);
};

export default HomeScreen;
