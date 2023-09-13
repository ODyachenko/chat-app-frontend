import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './api/user.api';
import { uploadsApi } from './api/uploads.api';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
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
