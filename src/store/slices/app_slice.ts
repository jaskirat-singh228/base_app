import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setDataToAsyncStorage } from 'utilities/async_storage';
import { AsyncStorageKeys } from 'utilities/async_storage_keys';

type TAppThemeData = {
	theme: 'light' | 'dark' | 'system';
};

const initialState: TAppThemeData = {
	theme: 'system',
};

const appSlice = createSlice({
	name: 'appData',
	initialState: initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<'light' | 'dark' | 'system'>) => {
			state.theme = action.payload;
			setDataToAsyncStorage(AsyncStorageKeys.DARK_THEME, action.payload);
		},
	},
});

export const { setTheme } = appSlice.actions;
export default appSlice.reducer;
