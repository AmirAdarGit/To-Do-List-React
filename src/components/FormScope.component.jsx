import React from "react";
import { useState } from "react";

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
      <input
        value={inputTask}
        placeholder="input new task"
        type="text"
        onChange={onChangeHandle}
      ></input>
      <button>Submit</button>
    </form>
  );
}

export default FormScope;
