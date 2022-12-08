import { ButtonDelete, ButtonDropDown } from "./Button";

export function FilterTodoCompleted({ todo }) {
  while (todo.stateTodo === "COMPLETED") {
    return (
      <li>
        {todo.name}
        <ButtonDelete />
      </li>
    );
  }
}

export function FilterTodoProgress({ todo }) {
  while (todo.stateTodo === "PROGRESS") {
    return (
      <li>
        <ButtonDropDown />
        {todo.name}
        <ButtonDelete />
      </li>
    );
  }
}
