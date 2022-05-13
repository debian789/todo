import React from "react";
import "./TodoCounter.css";

function TodoCounter({ totalTodos, completedTodo }) {

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
