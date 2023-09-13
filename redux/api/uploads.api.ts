import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const uploadsApi = createApi({
  reducerPath: 'uploadsApi',
  tagTypes: ['uploads'],
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5555/uploads`,
  }),
  endpoints: (builder: any) => ({
    uploadImage: builder.mutation({
      query: (body: any) => ({
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('token'),
        },
        body,
      }),
      invalidatesTags: ['uploads'],
    }),
  }),
});

export const { useUploadImageMutation } = uploadsApi;
