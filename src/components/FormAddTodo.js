import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todos/todo.slice";
import { todosType } from "../utils/constants";
import { selectTodoList } from "../features/todos/todo.selectors";

export default function FormAddTodo() {
  const dispatch = useDispatch();
  const todoList = useSelector(selectTodoList);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = ({ name }) => {
    const allTodo = [
      ...todoList[todosType.TO_DO],
      ...todoList[todosType.IN_PROGRESS],
      ...todoList[todosType.DONE],
    ];

    if (allTodo.find((todo) => todo.name === name) == undefined) {
      dispatch(
        addTodo({
          id: name,
          name,
          dueDate: new Date().toLocaleDateString(),
          stateTodo: todosType.TO_DO,
        })
      );

      reset(); //clear form after submit
    } else {
      alert("Todo already present");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("name")} placeholder="Write Here"></input>
        <input type="submit"></input>
      </div>
    </form>
  );
}
