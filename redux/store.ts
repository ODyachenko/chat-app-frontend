import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './api/user.api';
import { uploadsApi } from './api/uploads.api';

export const store = configureStore({
  reducer: {
    // posts: postsSlice,
    [userApi.reducerPath]: userApi.reducer,
    [uploadsApi.reducerPath]: uploadsApi.reducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(uploadsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
