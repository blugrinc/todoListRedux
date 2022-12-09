import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { selectTodoList } from "../features/todos/todo.selectors";
import { addTodo } from "../features/todos/todo.slice";
import { todosType } from "../utils/constants";

export default function FormAddTodo() {
  const todoList = useSelector(selectTodoList);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ name }) => {
    dispatch(
      addTodo({
        id: name,
        name,
        dueDate: new Date().toLocaleDateString(),
        stateTodo: todosType.TO_DO,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("name")}></input>
        <input type="submit"></input>
      </div>
    </form>
  );
}
