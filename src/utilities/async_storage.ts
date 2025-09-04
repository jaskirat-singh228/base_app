import AsyncStorage from '@react-native-async-storage/async-storage';

export const setDataToAsyncStorage = async (key: string, value: string) => {
	try {
		await AsyncStorage.setItem(key, value);
	} catch (error) {
		console.log(error, '<<<<<<setDataInAsyncStorage Error');
	}
};

export const getDataFromAsyncStorage = async (key: string) => {
	try {
		return await AsyncStorage.getItem(key);
	} catch (error) {
		console.log(error, '<<<<<<getDataInAsyncStorage Error');
	}
};

export const removeDataFromAsyncStorage = async () => {
	try {
		return await AsyncStorage.clear();
	} catch (error) {
		console.log(error, '<<<<<<removeDataFromAsyncStorage Error');
	}
};
