import { useSelector } from "react-redux";
import { selectTodoList } from "../features/todos/todo.selectors";
import { initialState } from "../features/todos/todo.slice";
import { todosType } from "../utils/constants";
import Todo from "./Todo";

const ToDoList = () => {
  //useSelector, serve per accedere allo Store. Automaticamente riceverà lo stato dallo Store
  //E ritornerà una fetta dello store. In questo caso todos: todoSlice
  //Ho creato un todo.selector che richiamo

  const todoList = useSelector(selectTodoList);

  return (
    <div>
      <div>
        <ul>
          {todoList[todosType.TO_DO].map((todo) => (
            <Todo key={todo.name} todo={todo} />
          ))}
        </ul>
      </div>

      {/* <div>
        <h3>IN_PROGRSS </h3>
        <ul>
          {todoListInProgress.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>

      <div>
        <h3>DONE</h3>
        <ul>
          {initialState[todosType.DONE].map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
      </div> */}
    </div>
  );
};
export default ToDoList;
