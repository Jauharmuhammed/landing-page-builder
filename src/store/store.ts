import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./layoutSlice";
import imageReducer from "./imageSlice";
// ...

export const store = configureStore({
    reducer: {
        layout: layoutReducer,
        image: imageReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
