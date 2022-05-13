import React from "react";
import "./TodoCounter.css";


function contadorTotal(completedTodo, totalTodos) {
  return function ContadorTodo(props) {
    return (<span>{props.completedTodo} de {totalTodos}</span>)
  }
}

function TodoCounter({ totalTodos, completedTodo, loading }) {
  const WithContadorTotal = contadorTotal(completedTodo, totalTodos);

  return (
    <React.Fragment>
      <h1>Your Tasks</h1>
      <h4 className={!!loading ? 'title-loading' : undefined}>
        Has completado <WithContadorTotal completedTodo = {completedTodo}/> TODOs
      </h4>
    </React.Fragment>
  );
}

export { TodoCounter };
