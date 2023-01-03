import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApiSlice = createApi({
  reducerPath: "userApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
  }),
  endpoints: (builder) => ({
    getUserData: builder.query({
      query: () => `profile/user`,
    }),

    getAdminData: builder.query({
      query: () => "profile/admin",
    }),
  }),
});

export const {
 useGetUserDataQuery,
  useGetAdminDataQuery,

} = userApiSlice;
