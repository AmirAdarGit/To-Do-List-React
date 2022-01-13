import styled from "@emotion/styled";
import React from "react";
import ToDo from "./ToDo.compontne";

const ToDoListWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function ToDoList({ toDoList, toggleHandler }) {
  return (
    <ToDoListWrapperStyled>
      {toDoList.map((task) => {
        return <ToDo todo={task} key={task.id} toggleHandler={toggleHandler} />;
      })}
    </ToDoListWrapperStyled>
  );
}

export default ToDoList;
