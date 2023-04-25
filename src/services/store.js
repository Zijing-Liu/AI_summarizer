import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

export const store = configureStore({
  //grab a slice of the cake
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});
