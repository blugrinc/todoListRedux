import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateStateTodo } from "../features/todos/todo.slice";
import { selectTodoList } from "../features/todos/todo.selectors";
import { todosType } from "../utils/constants";

//BUTTON  STATE
export function ButtonDropDown({ todo }) {
  const dispatch = useDispatch();
  const todoList = useSelector(selectTodoList); //oggetto

  const updateState = ({ id, state, newState }) => {
    const updatedState = todoList[state]
      .filter((todo) => todo.id === id) //FIX!
      .map((todo) => {
        if (todo.id === id) {
          return {
            //elementi undefined
            ...todo,
            stateTodo: newState,
          };
        }
      });

    const deleteTodoFromPreviousState = todoList[state].filter(
      (todo) => todo.id !== id
    );

    const list = {
      ...todoList,
      [state]: [...deleteTodoFromPreviousState],
      [newState]: [
        ...todoList[newState],
        ...updatedState.filter((todo) => todo !== undefined),
      ],
    };

    dispatch(updateStateTodo(list));
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

//BUTTON DELETE
export function ButtonDelete({ todo }) {
  const dispatch = useDispatch();

  const removeTodo = (elementDelete) => {
    dispatch(deleteTodo(elementDelete));
  };
  return <button onClick={() => removeTodo(todo)}>Delete</button>;
}
