import { useSelector } from "react-redux";
import { selectTodoList } from "../features/todos/todo.selectors";
import { todosType } from "../utils/constants";
import Todo from "./Todo";

import styled from "styled-components";
import { device } from "../utils/constants";

const ToDoListStyle = styled.div`
  text-align: center;

  h3 {
    border: 1px solid black;
    margin-bottom: 10px;
  }

  ul {
    margin: 0px 10px;
  }

  @media ${device.mobileL} {
    display: flex;
    justify-content: space-around;
    align-items: baseline;

    h3 {
      border: none;
      font-family: "Fantasy";
    }

    ul {
      margin: 10px auto;
    }
  }
`;

const List = styled.div`
  @media ${device.mobileL} {
    border-left: 1px solid black;
    border-right: 1px solid black;
    padding: 0 20px;
    border-radius: 7px;
  }
`;

const ToDoList = () => {
  //useSelector, serve per accedere allo Store. Automaticamente riceverà lo stato dallo Store
  //E ritornerà una fetta dello store. In questo caso todos: todoSlice
  //Ho creato un todo.selector che richiamo

  const todoList = useSelector(selectTodoList);

  return (
    <ToDoListStyle>
      <List>
        <h3>TO_DO</h3>
        <ul>
          {todoList[todosType.TO_DO].map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
      </List>

      <List>
        <h3>IN_PROGRSS </h3>
        <ul>
          {todoList[todosType.IN_PROGRESS].map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
      </List>

      <List>
        <h3>DONE</h3>
        <ul>
          {todoList[todosType.DONE].map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
      </List>
    </ToDoListStyle>
  );
};
export default ToDoList;
