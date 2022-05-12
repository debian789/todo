import React from "react";
import { TodoContext } from "../../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { totalTodos, completedTodo } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <h1>Your Tasks</h1>
      <h4>
        Has completado {completedTodo} de {totalTodos} TODOs
      </h4>
    </React.Fragment>
  );
}

export { TodoCounter };
