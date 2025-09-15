import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TAppThemeData = {
	theme: 'light' | 'dark' | 'system';
	isBiometric: boolean;
	appLockPIN: string;
};

const initialState: TAppThemeData = {
	theme: 'light',
	isBiometric: false,
	appLockPIN: '',
};

const appSlice = createSlice({
	name: 'appData',
	initialState: initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<'light' | 'dark' | 'system'>) => {
			state.theme = action.payload;
		},
		setAppLock: (state, action: PayloadAction<string>) => {
			state.appLockPIN = action.payload;
		},
		setBiometric: (state, action: PayloadAction<boolean>) => {
			state.isBiometric = action.payload;
		},
		resetAppData: (state) => (state = initialState),
	},
});

export const { setTheme, setAppLock, setBiometric, resetAppData } = appSlice.actions;
export default appSlice.reducer;
