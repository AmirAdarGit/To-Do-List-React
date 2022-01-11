import React from "react";
import "./App.css";
import { BasicButton } from "./styled/buttons";
import styled from "./styled/style";
import { ThemeProvider } from "@emotion/react";
import THEME from "./styled/theme.constants";
import { ReactElement, useCallback, useState, useEffect } from "react";
import TasksComponent from "./TasksComponent";

// testing the new branch..

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  border-radius: 8px;
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
`;

const AddNewTask = styled(BasicButton)``;

const Title = styled.div`
  width: 100%;
  font-size: 50px;
`;

function App() {
  const [singleCharacter, setSingleCharacter] = useState("");
  const [singleTask, setSingleTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    setSingleTask(singleCharacter);
  }, [singleCharacter]);

  const addNewLine = (singleTask) => {
    console.log(singleTask);
  };

  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => (
      <ListItem key={number.toString()} value={number} />
    ));
    return <ul>{listItems}</ul>;
  }

  function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
  }

  return (
    <div className="App">
      <AppContainer>
        <ThemeProvider theme={THEME}>
          <Title>To Do List</Title>
          <ActionContainer>
            <AddNewTask onClick={() => addNewLine(singleTask)}>
              click to add task
            </AddNewTask>
            <input
              placeholder="insert task"
              onChange={(e) => setSingleCharacter(e.target.value)}
            />
            {/* <TasksComponent task={singleTask} /> */}
            <li>smit</li>
            {myList}
          </ActionContainer>
        </ThemeProvider>
      </AppContainer>
    </div>
  );
}

export default App;
