import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice.js";

export let store = configureStore({
  reducer: {
    todo: todoReducer, // Add todo reducer
  },
});
