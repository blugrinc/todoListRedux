import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../features/todos/todo.slice";

export default function Todo({ todo }) {
  //Facciamo la Dispatch delle nostre azioni
  const dispatch = useDispatch();

  const removeTodo = (elementDelete) => {
    dispatch(deleteTodo(elementDelete));
  };
  const onToggleTodo = (elementComplete) => {
    dispatch(toggleTodo(elementComplete));
  };
  return (
    <li>
      <button onClick={() => onToggleTodo(todo)}> Completa </button>
      {todo.name}
      <button onClick={() => removeTodo(todo)}>Delete</button>
    </li>
  );
}
