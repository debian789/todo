import React from "react";
import { TodoContext } from "../../TodoContext";

function TodoCounter() {
  const { totalTodos, completedTodo } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <h1>Your Tasks</h1>
      <h2>
        Has completado {completedTodo} de {totalTodos} TODOs
      </h2>
    </React.Fragment>
  );
}

export { TodoCounter };
