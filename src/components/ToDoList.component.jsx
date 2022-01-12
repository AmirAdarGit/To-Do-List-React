import React from "react";
import ToDo from "./ToDo.compontne";

function ToDoList({ toDoList, toggleHandler }) {
  return (
    <div>
      {toDoList.map((task) => {
        return <ToDo todo={task} key={task.id} toggleHandler={toggleHandler} />;
      })}
    </div>
  );
}

export default ToDoList;
