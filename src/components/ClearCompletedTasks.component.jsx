import React from "react";

function ClearCompletedTasks({ filterCompleteHandler }) {
  return <button onClick={filterCompleteHandler}>Clear Completed Tasks</button>;
}

export default ClearCompletedTasks;
