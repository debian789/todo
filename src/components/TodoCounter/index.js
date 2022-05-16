import React from "react";
import "./TodoCounter.css";

function contadorTotal(totalTodos) {
  return function ContadorTodo(props) {
    return (<span>{props.completedTodo} de {totalTodos}</span>)
  }
}

function TodoCounter({ totalTodos, completedTodo, loading }) {
  const WithContadorTotal = contadorTotal(totalTodos);

  return (
    <React.Fragment>
      <div className="content-title-todo">      
        <h1>Tus tareas</h1>
        <h4 className={!!loading ? 'title-loading' : undefined}>
          Has completado <WithContadorTotal completedTodo = {completedTodo}/>
        </h4>
      </div>
    </React.Fragment>
  );
}

export { TodoCounter };
