import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateStateTodo } from "../features/todos/todo.slice";
import { selectTodoList } from "../features/todos/todo.selectors";
import { todosType } from "../utils/constants";

export function ButtonDropDown({ todo }) {
  const dispatch = useDispatch();
  const todoList = useSelector(selectTodoList); //oggetto

  const updateState = ({ id, state, newState }) => {
    let updatedTodo = todoList[state]
      .map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            stateTodo: newState,
          };
        }
      })
      .filter((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
          };
        }
      })[0];

    const list = {
      ...todoList,
      [newState]: [updatedTodo],
    };
    console.log(list);
    /*  dispatch(updateStateTodo(list)); */
  };

  return (
    <div>
      {todo.stateTodo !== todosType.TO_DO && (
        <button
          onClick={() =>
            updateState({
              id: todo.id,
              state: todo.stateTodo,
              newState: todosType.TO_DO,
            })
          }
        >
          toDo
        </button>
      )}
      {todo.stateTodo !== todosType.IN_PROGRESS && (
        <button
          onClick={() =>
            updateState({
              id: todo.id,
              state: todo.stateTodo,
              newState: todosType.IN_PROGRESS,
            })
          }
        >
          inProgress
        </button>
      )}

      {todo.stateTodo !== todosType.DONE && (
        <button
          onClick={() =>
            updateState({
              id: todo.id,
              state: todo.stateTodo,
              newState: todosType.DONE,
            })
          }
        >
          Completed
        </button>
      )}
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
