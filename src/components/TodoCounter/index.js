import React from "react";
import "./TodoCounter.css";

function TodoCounter({ totalTodos, completedTodo, loading }) {

  return (
    <React.Fragment>
      <h1>Your Tasks</h1>
      <h4 className={!!loading ? 'title-loading' : undefined}>
        Has completado {completedTodo} de {totalTodos} TODOs
      </h4>
    </React.Fragment>
  );
}

export { TodoCounter };
