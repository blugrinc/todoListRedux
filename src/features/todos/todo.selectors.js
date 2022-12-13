import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "../../features/todos/todo.slice";

// selectDomain ritorna lo stato dallo store e ci passa la fetta dello stato che ci interessa
const selectDomainList = (state) => state.todos || initialState;

//Qui decidiamo che cosa ritornare e facciamo il Dispatch delle Azioni
export const selectTodoList = createSelector(
  [selectDomainList],
  (todos) => todos.todosList
);
//Torna la copia memoizzata , del dato relativo (state.todos.todoList)

//memoizzazione
/* 
const fib = (n, memo) => {
  memo = memo || {};

  if (memo[n])
    //è già presente
    return memo[n];

  if (n <= 1) return 1;
  return (memo[n] = fib(n - 1, memo) + fib(n - 2, memo));
}; 
*/
