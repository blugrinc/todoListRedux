import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoSlice from "../features/todos/todo.slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoSlice,
  },
});
