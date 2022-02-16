import { configureStore } from '@reduxjs/toolkit';
import signupReducer from './slice/signupSlice';
import dashBoardReducer from './slice/dashBoardSlice';

export const store = configureStore({
  reducer: {
    signup: signupReducer,
    dashboard: dashBoardReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
