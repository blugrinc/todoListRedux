import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "../../features/todos/todo.slice";

// selectDomain ritorna lo stato dallo store e ci passa la fetta dello stato che ci interessa
const selectDomainList = (state) => state.todos || initialState;

//Qui decidiamo che cosa ritornare e facciamo il Dispatch delle Azioni
export const selectTodoList = createSelector(
  [selectDomainList],
  (todos) => todos.todosList
);

export const selectDone = createSelector(
  [selectDomainList],
  (todos) => todos.done
);

export const selectInProgress = createSelector(
  [selectDomainList],
  (todos) => todos.inProgress
);
