import React from "react";
import ToDoList from "./components/ToDoList";
import "./App.css";
import FormAddTodo from "./components/FormAddTodo";

function App() {
  return (
    <div className="App">
      <h1>MY TO DO LIST</h1>
      <FormAddTodo />
      <ToDoList />
    </div>
  );
}

export default App;
