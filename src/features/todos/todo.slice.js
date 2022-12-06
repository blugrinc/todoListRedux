import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  todosList: [
    {
      name: "Chiama mamma",
      dueDate: new Date().toLocaleDateString(),
    },
  ],
};

//slice = reducer
//CreateSlice che argomenti prende?
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    //creiamo azioni e reducer contemporanemanete
    //Facndo il disaptch di addTodo avreo un oggetto tipo: {type: 'todos/addTodo", payload:}
    addTodo: (state, action) => {
      state.push(action.payload);
      /* state.todosList = [...state.todosList, action.payload]; */
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.name !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;