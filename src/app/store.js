import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import usersReducers from "../features/users/usersSlice";

//Getting access to all the different Reducers
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducers,
  },
});
