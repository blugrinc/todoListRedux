import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "../../features/todos/todo.slice";

// selectDomain ritorna lo stato dallo store e ci passa la fett adello stato che ci interessa
const selectDomain = (state) => state.todos || initialState;

//Qui decidiamo che cosa ritornare e facciamo il Dispatch delle Azioni
export const selectTodoList = createSelector(
  [selectDomain],
  (todos) => todos.todosList
);
