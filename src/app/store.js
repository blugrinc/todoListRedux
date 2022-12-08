import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../features/todos/filter.slice";
import todoSlice from "../features/todos/todo.slice";

export const store = configureStore({
  reducer: {
    todos: todoSlice,
    filter: filterSlice,
  },
});
