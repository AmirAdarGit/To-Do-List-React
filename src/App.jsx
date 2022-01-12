import React from "react";
import "./App.css";

import { ThemeProvider } from "@emotion/react";
import THEME from "./styled/theme.constants";
import { useState } from "react";
import { nanoid } from "nanoid";

import Header from "./components/Header.component";
import data from "./data.json";
import ToDoList from "./components/ToDoList.component";
import FormScope from "./components/FormScope.component";
import ClearCompletedTasks from "./components/ClearCompletedTasks.component";

function App() {
  const [toDoList, setToDoList] = useState(data);

  const addNewTask = (taskByName) => {
    const newTask = {
      id: nanoid(5),
      theTask: taskByName,
      isComplete: false,
    };

    let toDoListCopy = [...toDoList];
    toDoListCopy = [...toDoListCopy, newTask];
    setToDoList(toDoListCopy);
  };

  const toggleHandler = (taskToHandle) => {
    const newList = toDoList.map((task) => {
      return taskToHandle.id === task.id
        ? { ...task, isComplete: !task.isComplete }
        : { ...task };
    });
    setToDoList(newList);
  };

  const filterCompleteHandler = () => {
    const filterTasks = toDoList.filter((task) => {
      return task.isComplete === false;
    });
    setToDoList(filterTasks);
  };

  return (
    <div className="App">
      <ThemeProvider theme={THEME}>
        <Header />
        <ToDoList toDoList={toDoList} toggleHandler={toggleHandler}></ToDoList>
        <ClearCompletedTasks
          filterCompleteHandler={filterCompleteHandler}
        ></ClearCompletedTasks>
        <FormScope addNewTaskHandler={addNewTask}></FormScope>
      </ThemeProvider>
    </div>
  );
}

export default App;
