import { useSelector } from "react-redux";
import { selectTodoList } from "../features/todos/todo.selectors";
import Todo from "./Todo";

const Todos = ({ todos }) => {
  //useSelector, serve per accedere allo Store. Automaticamente riceverà lo stato dallo Store
  //E ritornerà una fetta dello store. In questo caso todos: todoSlice
  //Ho creato un todo.selector che richiamo
  const todoList = useSelector(selectTodoList);

  return (
    <ul>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
export default Todos;
