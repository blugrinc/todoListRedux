import { createSlice } from "@reduxjs/toolkit";
import { todosType } from "../../utils/constants";

/* export const initialState = {
  todosList: [{}],
  inProgress: [{}],
  done: [{}],
}; */

export const initialState = {
  todosList: {
    [todosType.TO_DO]: [],
    [todosType.IN_PROGRESS]: [],
    [todosType.DONE]: [],
  },
};

//slice = reducer
//CreateSlice che argomenti prende?
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    //creiamo azioni e reducer contemporanemanete
    //Facndo il disaptch di addTodo avreo un oggetto {type: 'todos/addTodo", payload:}
    addTodo: (state, action) => {
      const typeOfTodo = action.payload.stateTodo;
      state.todosList[typeOfTodo] = [
        ...state.todosList[typeOfTodo],
        action.payload,
      ];
    },
    deleteTodo: (state, action) => {
      const typeOfTodo = action.payload.stateTodo;
      state[typeOfTodo] = state[typeOfTodo].filter(
        (todo) => todo.id !== action.payload.id
      );
    },
    updateStateTodo: (state, action) => {
      //Prendo todo
      //lo aggiorno con il nuovo stateTodo, preso in input dal pulsante
      //ritorno il todo, con il nuovo sato e lo colloco nell'array corretto.
    },
  },
});

export const { addTodo, deleteTodo, updateStateTodo } = todoSlice.actions;

export default todoSlice.reducer;
