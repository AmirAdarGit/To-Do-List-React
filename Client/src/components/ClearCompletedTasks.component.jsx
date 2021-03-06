import styled from "@emotion/styled";
import React from "react";
import { SelectButton } from "../styled/buttons";

const ButtonRegularStyled = styled(SelectButton)`
  width: 243px;
`;

function ClearCompletedTasks({ filterCompleteHandler }) {
  return (
    <ButtonRegularStyled onClick={filterCompleteHandler}>
      Clear Completed Tasks
    </ButtonRegularStyled>
  );
}

export default ClearCompletedTasks;
