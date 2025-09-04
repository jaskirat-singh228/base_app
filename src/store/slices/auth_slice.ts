import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { removeDataFromAsyncStorage, setDataToAsyncStorage } from 'utilities/async_storage';
import { AsyncStorageKeys } from 'utilities/async_storage_keys';

type TUserLoginData = {
	isUserLoggedIn: boolean | null;
	userLoginData: TUserLoginData | undefined;
};

const initialState: TUserLoginData = {
	isUserLoggedIn: null,
	userLoginData: undefined,
};

const authSlice = createSlice({
	name: 'userLoginData',
	initialState: initialState,
	reducers: {
		userLogin: (state, action: PayloadAction<TUserLoginResponseData>) => {
			setDataToAsyncStorage(AsyncStorageKeys.USER_LOGIN_DATA, action?.payload?.email ?? '');

			state.isUserLoggedIn = true;
			state.userLoginData = state.userLoginData;

			setDataToAsyncStorage(
				AsyncStorageKeys.USER_LOGIN_DATA,
				JSON.stringify(action?.payload ?? ''),
			);
		},
		userLogout: (state) => {
			state.isUserLoggedIn = false;
			state.userLoginData = undefined;
			removeDataFromAsyncStorage();
		},
	},
});

export const { userLogin, userLogout } = authSlice.actions;
export default authSlice.reducer;
