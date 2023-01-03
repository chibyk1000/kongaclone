import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import  cartSlice from './cartSlice'
import { userFetch } from "./api";
import appSlice from './userSlice'
import {userApiSlice} from './userApiSlice'
export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [userFetch.reducerPath]: userFetch.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    appSlice,
    cartSlice,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userFetch.middleware),
});
setupListeners(store.dispatch);