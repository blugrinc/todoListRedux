import { ButtonDelete, ButtonDropDown } from "./Button";
export default function Todo({ todo }) {
  return (
    <li>
      <ButtonDropDown todo={todo} />
      {todo.name}
      <ButtonDelete todo={todo} />
    </li>
  );
}
