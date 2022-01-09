import React from "react";
import "./App.css";
import { BasicButton } from "./styled/buttons";
import styled from "./styled/style";
import { ThemeProvider } from "@emotion/react";
import THEME from "./styled/theme.constants";
import { ReactElement, useCallback, useState, useMemo } from "react";

// testing the new branch..

const Container = styled.div`
  width: 100%;
  height: 100vh;
  border-radius: 8px;
  padding: 16px;
`;

const AddNewTask = styled(BasicButton)``;

const Title = styled.div`
  width: 100%;
`;

function App() {
  const [taskList, setTaseList] = useState([]);

  const addNewLine = () => {};

  return (
    <div className="App">
      <Container>
        <ThemeProvider theme={THEME}>
          <Title>To Do List</Title>

          <AddNewTask onClick={addNewLine}>click to add task</AddNewTask>
          <input placeholder="insert task"></input>
        </ThemeProvider>
      </Container>
    </div>
  );
}

export default App;
