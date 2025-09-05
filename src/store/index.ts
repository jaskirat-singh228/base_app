import { configureStore } from '@reduxjs/toolkit';
import appDataReducer from 'store/slices/app_slice';
import authDataReducer from 'store/slices/auth_slice';

export const store = configureStore({
	reducer: {
		authData: authDataReducer,
		appData: appDataReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
