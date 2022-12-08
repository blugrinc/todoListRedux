import { useSelector } from "react-redux";
import { selectTodoList } from "../features/todos/todo.selectors";
import { FilterTodoCompleted, FilterTodoProgress } from "./FilterTodo";
import Todo from "./Todo";

const Todos = ({ todos }) => {
  //useSelector, serve per accedere allo Store. Automaticamente riceverà lo stato dallo Store
  //E ritornerà una fetta dello store. In questo caso todos: todoSlice
  //Ho creato un todo.selector che richiamo
  const todoList = useSelector(selectTodoList);

  return (
    <div>
      <div>
        <ul>
          {todoList.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
      <div>
        <h3>Iniziati </h3>
        <ul>
          {todoList.map((todo) => (
            <FilterTodoProgress key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
      <div>
        <h3>Completati</h3>
        <ul>
          {todoList.map((todo) => (
            <FilterTodoCompleted key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Todos;
