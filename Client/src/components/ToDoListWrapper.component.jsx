import React from "react";

import { useState } from "react";
import { nanoid } from "nanoid";

import data from "../data.json";
import ToDoList from "./ToDoList.component";
import FormScope from "./FormScope.component";
import ClearCompletedTasks from "./ClearCompletedTasks.component";

function ToDoListWrapper({ logOutHandler, loginData }) {
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
    <div>
      <h3>You logged in as {loginData.profileObj.email}</h3>
      <img src={loginData.profileObj.imageUrl} alt="new" />
      <ToDoList toDoList={toDoList} toggleHandler={toggleHandler}></ToDoList>
      <ClearCompletedTasks
        filterCompleteHandler={filterCompleteHandler}
      ></ClearCompletedTasks>
      <FormScope addNewTaskHandler={addNewTask}></FormScope>
      <button onClick={logOutHandler}>Log-Out</button>
    </div>
  );
}

export default ToDoListWrapper;
