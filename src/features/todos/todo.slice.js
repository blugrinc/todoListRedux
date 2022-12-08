import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  todosList: [
    {
      id: 1,
      name: "Chiama mamma",
      dueDate: new Date().toLocaleDateString(),
      stateTodo: "",
    },
    {
      id: 2,
      name: "Chiama papà",
      dueDate: new Date().toLocaleDateString(),
      stateTodo: "PROGRESS",
    },
    {
      id: 3,
      name: "Chiama Luigi",
      dueDate: new Date().toLocaleDateString(),
      stateTodo: "COMPLETED",
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
    //Facndo il disaptch di addTodo avreo un oggetto {type: 'todos/addTodo", payload:}
    addTodo: (state, action) => {
      /* state.push(action.payload); */
      state.todosList = [...state.todosList, action.payload];
    },
    deleteTodo: (state, action) => {
      /*  return state.filter((todo) => todo.name !== action.payload); */
      state.todosList = state.todosList.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
    /* toggleTodo: (state, action) => {
      state.todosList = state.todosList.map((elementState) => {
        
      });
    }, */
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
