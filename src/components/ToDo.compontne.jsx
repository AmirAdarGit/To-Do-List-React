import styled from "@emotion/styled";
import React from "react";

const TodoStyled = styled.div`
  cursor: pointer;
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
