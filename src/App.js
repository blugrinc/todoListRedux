import React from "react";
import ToDoList from "./components/ToDoList";
import FormAddTodo from "./components/FormAddTodo";
import { GlobalStyles } from "./components/styles/Global";

import styled from "styled-components";
import { device } from "./utils/constants";

const Header = styled.div`
  background: #fff;
  margin: 5vh 2vw;
  border-radius: 7px;
  padding: 20px 0;
  width: 180px;

  @media ${device.mobileL} {
    background: #fff;
    margin: 5vh 0 5vh 2vw;
    border-radius: 7px;
    padding: 20px 0;
    width: 300px;
  }
`;

const Section = styled.div`
  background: #fff;
  border-radius: 7px;
  padding: 20px 0;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Header>
          <FormAddTodo />
        </Header>
        <Section>
          <ToDoList />
        </Section>
      </div>
    </>
  );
}

export default App;
