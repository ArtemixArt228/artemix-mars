import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";

import { marsApi } from "./services/mars";

import marsReducer from "./features/marsSlice";

export const store = configureStore({
  reducer: {
    [marsApi.reducerPath]: marsApi.reducer,
    mars: marsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(marsApi.middleware),
});

setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
