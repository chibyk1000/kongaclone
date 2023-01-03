import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userFetch = createApi({
  reducerPath: "userFetch",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
  }),
  endpoints: (builder) => ({
  
    getProducts: builder.query({
      query: ()=> "products/all"
    }),
    getProduct: builder.query({
      query: (id)=> `products/${id}`
    })

  }),
});

export const {  useGetProductsQuery, useGetProductQuery, } = userFetch;
