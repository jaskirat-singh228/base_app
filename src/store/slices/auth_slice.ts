import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TAuthData = {
	isUserLoggedIn: boolean | null;
	userLoginData: TUserLoginResponseData | undefined;
};

const initialState: TAuthData = {
	isUserLoggedIn: null,
	userLoginData: undefined,
};

const authSlice = createSlice({
	name: 'authData',
	initialState: initialState,
	reducers: {
		userLogin: (state, action: PayloadAction<TUserLoginResponseData>) => {
			state.isUserLoggedIn = true;
			state.userLoginData = state.userLoginData;
		},
		userLogout: (state) => {
			state.isUserLoggedIn = false;
			state.userLoginData = undefined;
		},
	},
});

export const { userLogin, userLogout } = authSlice.actions;
export default authSlice.reducer;
