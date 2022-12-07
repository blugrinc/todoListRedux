import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTodoList } from "./features/todos/todo.selectors";
import { addTodo } from "./features/todos/todo.slice";
import Todos from "./components/Todos";
import "./App.css";

function App() {
  const todoList = useSelector(selectTodoList);
  //Facciamo la Dispatch delle nostre azioni
  const dispatch = useDispatch();

  const element = useRef("");

  const managerClick = () => {
    dispatch(
      addTodo({
        id: todoList.length + 1,
        name: element.current.value,
        dueDate: new Date().toLocaleDateString(),
      })
    );
  };

  return (
    <div className="App">
      <h1>MY TO DO LIST</h1>
      <form>
        <div>
          <input ref={element} />
        </div>
      </form>
      <button onClick={managerClick}>Add</button>

      <Todos />
    </div>
  );
}

export default App;
