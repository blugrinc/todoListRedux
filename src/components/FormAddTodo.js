import { useForm } from "react-hook-form";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTodoList } from "../features/todos/todo.selectors";
import { addTodo } from "../features/todos/todo.slice";

export default function FormAddTodo() {
  const todoList = useSelector(selectTodoList);
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  /* const element = useRef(""); */

  const onSubmit = handleSubmit((data) => {
    dispatch(
      addTodo({
        id: todoList.length + 1,
        name: ??????????? ,
        dueDate: new Date().toLocaleDateString(),
      })
    );
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input        
          {...register("name")}
          placeholder="write here"
        ></input>
        <input type="submit"></input>
      </div>
    </form>
  );
}
