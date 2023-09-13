import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { iUserReg, iUserLog } from '@/types';

export const userApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['user'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5555',
  }),
  endpoints: (builder: any) => ({
    getAuthUser: builder.query({
      query: () => ({
        url: `/auth/me`,
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      }),
      providesTags: ['user'],
    }),
    createUser: builder.mutation({
      query: (body: iUserReg) => ({
        url: `/auth/registration`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['user'],
    }),
    loginUser: builder.mutation({
      query: (body: iUserLog) => ({
        url: `/auth/login`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['user'],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useGetAuthUserQuery,
} = userApi;
