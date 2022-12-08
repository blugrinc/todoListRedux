import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todos/todo.slice";
import { filterTodo } from "../features/todos/filter.slice";
import { filterTodoList } from "../features/todos/todo.selectors";

export function ButtonDropDown() {
  const dispatch = useDispatch();

  /* const onToggleTodo = (elementState) => {
    dispatch(toggleTodo(elementState));
  };
 */

  const onFilter = (elementState) => {
    dispatch(filterTodo(elementState));
  };

  return (
    <button>
      <button onClick={() => onFilter("")}>1</button>

      <button onClick={() => onFilter("PROGRESS")}>2</button>

      <button onClick={() => onFilter("COMPLETED")}>3 </button>
    </button>
  );
}

export function ButtonDelete({ todo }) {
  const dispatch = useDispatch();

  const removeTodo = (elementDelete) => {
    dispatch(deleteTodo(elementDelete));
  };
  return <button onClick={() => removeTodo(todo)}>Delete</button>;
}
