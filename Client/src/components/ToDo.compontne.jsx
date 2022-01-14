import styled from "@emotion/styled";
import React from "react";
const TodoStyled = styled.div`
  background-color: ${(props) => props.theme.color.inputPlaceholder};
  padding: 8px;
  margin: 8px;
  border-radius: 16px;
  cursor: pointer;
  width: auto;
  text-decoration: ${(props) => props.isSelected && "line-through"};
`;

function ToDo({ todo, toggleHandler }) {
  return (
    <TodoStyled
      isSelected={todo.isComplete}
      onClick={() => {
        toggleHandler(todo);
        console.log(todo.isComplete);
      }}
    >
      {todo.theTask}
    </TodoStyled>
  );
}

export default ToDo;
