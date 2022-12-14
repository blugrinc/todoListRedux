import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todos/todo.slice";
import { todosType } from "../utils/constants";
import { selectTodoList } from "../features/todos/todo.selectors";

import styled from "styled-components";
import { device } from "../utils/constants";

const FormAddTodoStyle = styled.form`
  input {
    height: 2rem;
    border-radius: 5px;
    border: 1px solid black;
  }

  input::placeholder {
    color: black;
    font-family: "Fantasy";
  }

  input:first-of-type {
    width: 135px;
    margin: 0px 4px;
  }

  input:last-of-type {
    transition-duration: 0.2s;
    background-image: radial-gradient(
      circle,
      rgba(159, 236, 159, 1) 0%,
      rgba(148, 233, 231, 1) 87%
    );
    color: black;
    font-weight: bold;
    cursor: pointer;
  }

  input:last-of-type:hover {
    color: red;
  }

  @media ${device.mobileL} {
    text-align: center;

    input {
      height: 2rem;
      padding: 0 10px;
      border-radius: 5px;
      border: 1px solid black;
    }

    input::placeholder {
      color: black;
      font-family: "Fantasy";
    }

    input:last-of-type {
      margin-left: 10px;
      transition-duration: 0.2s;
      background-image: radial-gradient(
        circle,
        rgba(159, 236, 159, 1) 0%,
        rgba(148, 233, 231, 1) 87%
      );
      color: black;
      font-weight: bold;
      cursor: pointer;
    }

    input:last-of-type:hover {
      color: red;
    }
  }
`;

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

    if (allTodo.find((todo) => todo.name === name) === undefined) {
      dispatch(
        addTodo({
          id: name,
          name: name.toUpperCase(),
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
    <FormAddTodoStyle onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Add a new task"></input>
      <input type="submit"></input>
    </FormAddTodoStyle>
  );
}
