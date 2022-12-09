import { useDispatch } from "react-redux";
import { deleteTodo, updateStateTodo } from "../features/todos/todo.slice";
import { todosType } from "../utils/constants";

export function ButtonDropDown({ todo }) {
  const dispatch = useDispatch();

  const updateState = (actualState, newState) => {
    const newTodo = {
      ...todo,
      actualState: newState,
    };
    dispatch(updateStateTodo(newTodo));
  };

  return (
    <div>
      <button onClick={() => updateState((todo.stateTodo, todosType.TO_DO))}>
        1
      </button>

      <button
        onClick={() => updateState(todo.stateTodo, todosType.IN_PROGRESS)}
      >
        2
      </button>

      <button onClick={() => updateState(todosType.DONE)}>3</button>
    </div>
  );
}

export function ButtonDelete({ todo }) {
  const dispatch = useDispatch();

  const removeTodo = (elementDelete) => {
    dispatch(deleteTodo(elementDelete));
  };
  return <button onClick={() => removeTodo(todo)}>Delete</button>;
}
