import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTodoList } from "./features/todos/todo.selectors";
import { addTodo, deleteTodo } from "./features/todos/todo.slice";
import "./App.css";

function App() {
  //useSelector, serve per accedere allo Store. Automaticamente riceverà lo stato dallo Store
  //E ritornerà una fetta dello store. In questo caso todos: todoSlice
  //Ho creato un todo.selector che richiamo
  const todoSlice = useSelector(selectTodoList);
  //Facciamo la Dispatch delle nostre azioni
  const dispatch = useDispatch();

  const element = useRef("");

  const managerClick = () => {
    dispatch(
      addTodo({
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
          <button onClick={managerClick}>Add</button>
        </div>
      </form>
      <ul>
        {todoSlice.map((todo) => (
          <li key={todo.name}>
            {todo.name}
            <button onClick={() => dispatch(deleteTodo(todo))}> Delete </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
