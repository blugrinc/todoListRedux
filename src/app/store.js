import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todos/todo.slice";

export const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
});
