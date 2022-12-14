import { ButtonDelete, ButtonDropDown } from "./Button";

import styled from "styled-components";
import { useState } from "react";
import { device } from "../utils/constants";

const Li = styled.li`
  list-style: none;
  margin-bottom: 10px;
`;

const Element = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.mobileL} {
    min-width: 100px;
    max-width: 300px;
  }

  span {
    text-align: center;
    margin-right: 10px;
  }
`;

const CheckBoxWrapper = styled.div`
  position: relative;
  margin-right: 18px;
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 2px;
  left: -2px;
  width: 21px;
  height: 13px;
  border-radius: 7px;
  background: #bebebe;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 9px;
    height: 9px;
    margin: 1.5px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px tgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const CheckBox = styled.input`
  opacity: 1;
  z-index: 1;
  border-radius: 7px;
  height: 7px;
  width: 7px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 9px;
      height: 9px;
      margin-left: 10.05px;
      transition: 0.2s;
    }
  }
`;

const WindowTodo = styled.div`
  position: absolute;
  top: 7%;
  left: 67%;
  height: 13vh;
  width: 22vw;

  padding: 1px 0px 0px 0px;
  border: 1px solid black;

  background-image: radial-gradient(
    circle,
    rgba(159, 236, 159, 1) 0%,
    rgba(148, 233, 231, 1) 87%
  );

  transform: ${(props) => (props.clicked ? "scale(1.4)" : "scale(0)")};
  transition: transform 1s;

  strong {
    color: red;
    font-size: 6px;
  }

  p:first-of-type {
    padding-right: 30px;
  }

  p:last-of-type strong {
    padding-right: 24px;
  }

  p {
    margin: 0px 0px 0px 0px;
    padding: 2px 2px 2px 2px;
    font-size: 6px;
  }

  @media ${device.mobileM} {
    left: 56%;
    height: 12vh;
    width: 31vw;

    p:first-of-type {
      padding-right: 85px;
    }
  }

  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    position: absolute;
    top: 7%;
    left: 66%;
    height: 11vh;
    width: 26vw;

    border: 1px solid black;

    background-image: radial-gradient(
      circle,
      rgba(159, 236, 159, 1) 0%,
      rgba(148, 233, 231, 1) 87%
    );

    transform: ${(props) => (props.clicked ? "scale(1.4)" : "scale(0)")};
    transition: transform 1s;

    strong {
      color: red;
      font-size: 7px;
    }

    p {
      padding: 0;
      margin-left: 4px;
      font-size: 7px;
      font-weight: 200;
    }
  }
`;

export default function Todo({ todo }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Li>
      <Element>
        <CheckBoxWrapper>
          <CheckBox onClick={handleClick} id={todo.id} type="checkbox" />
          <CheckBoxLabel for={todo.id} />
        </CheckBoxWrapper>
        {/* <MenuLabel onClick={handleClick}></MenuLabel> */}

        <span>{todo.name}</span>

        <ButtonDelete todo={todo} />
      </Element>

      <WindowTodo clicked={click}>
        <p>
          ID: <strong> {todo.name} </strong>
        </p>
        <p>
          Data di inserimento: <strong>{todo.dueDate}</strong>
        </p>
        <ButtonDropDown todo={todo} />
      </WindowTodo>
    </Li>
  );
}
