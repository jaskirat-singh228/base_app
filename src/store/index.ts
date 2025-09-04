import { configureStore } from '@reduxjs/toolkit';
import userDataReducer from 'store/slices/auth_slice';

export const store = configureStore({
	reducer: {
		userLoginData: userDataReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
