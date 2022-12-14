import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateStateTodo } from "../features/todos/todo.slice";
import { selectTodoList } from "../features/todos/todo.selectors";
import { todosType } from "../utils/constants";
import styled from "styled-components";
import { device } from "../utils/constants";

const WindowButton = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2px 2px 2px 2px;

  button {
    border: none;
    font-size: 5px;
    margin-top: 4px;
    height: 10px;
    background-color: #0a0a23;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }

  button:hover {
    background-color: white;
    border: 0.8px solid black;
    color: black;
  }

  @media ${device.mobileM} {
    button {
      margin: 0px 10px;
    }
  }
`;

const ButtonTodo = styled.button`
  width: 22px;

  @media ${device.mobileL} {
    width: 33px;
    font-size: 8px;
  }
`;

const ButtonProgess = styled.button`
  width: 41px;

  @media ${device.mobileL} {
    width: 68px;
  }
`;

const ButtonDone = styled.button`
  width: 22px;

  @media ${device.mobileL} {
    width: 31px;
  }
`;

const IconBootstrap = styled.svg`
  margin-left: 7px;
  cursor: pointer;
  &:hover {
    background-color: coral;
  }
`;

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
        return todo;
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
    <WindowButton>
      {todo.stateTodo !== todosType.TO_DO && (
        <ButtonTodo
          onClick={() =>
            updateState({
              id: todo.id,
              state: todo.stateTodo,
              newState: todosType.TO_DO,
            })
          }
        >
          TO_DO
        </ButtonTodo>
      )}
      {todo.stateTodo !== todosType.IN_PROGRESS && (
        <ButtonProgess
          onClick={() =>
            updateState({
              id: todo.id,
              state: todo.stateTodo,
              newState: todosType.IN_PROGRESS,
            })
          }
        >
          IN_PROGRESS
        </ButtonProgess>
      )}

      {todo.stateTodo !== todosType.DONE && (
        <ButtonDone
          onClick={() =>
            updateState({
              id: todo.id,
              state: todo.stateTodo,
              newState: todosType.DONE,
            })
          }
        >
          DONE
        </ButtonDone>
      )}
    </WindowButton>
  );
}

//BUTTON DELETE
export function ButtonDelete({ todo }) {
  const dispatch = useDispatch();

  const removeTodo = (elementDelete) => {
    dispatch(deleteTodo(elementDelete));
  };
  return (
    <label onClick={() => removeTodo(todo)}>
      <IconBootstrap
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        fill="currentColor"
        class="bi bi-x-square"
        viewBox="0 0 16 16"
      >
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </IconBootstrap>
    </label>
  );
}
