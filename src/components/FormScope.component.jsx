import styled from "@emotion/styled";
import React from "react";
import { useState } from "react";
import { SelectButton } from "../styled/buttons";

const ButtonRegularStyled = styled(SelectButton)`
  height: 21px !important;
`;
const InputRegularStyled = styled.input`
  border-radius: 8px !important;
`;

function FormScope({ addNewTaskHandler }) {
  const [inputTask, setInputTask] = useState("");

  const onChangeHandle = (e) => {
    setInputTask(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addNewTaskHandler(inputTask);
    setInputTask("");
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <InputRegularStyled
        value={inputTask}
        placeholder="input new task"
        type="text"
        onChange={onChangeHandle}
      ></InputRegularStyled>
      <ButtonRegularStyled>Submit</ButtonRegularStyled>
    </form>
  );
}

export default FormScope;
