import { useForm } from "react-hook-form";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTodoList } from "../features/todos/todo.selectors";
import { addTodo } from "../features/todos/todo.slice";

export default function FormAddTodo() {
  const todoList = useSelector(selectTodoList);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ todo }) => {
    dispatch(
      addTodo({
        id: todoList.length + 1,
        todo,
        dueDate: new Date().toLocaleDateString(),
        stateTodo: "",
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("todo")}></input>
        <input type="submit"></input>
      </div>
    </form>
  );
}
