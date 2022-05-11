import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { ContainerCreateTask } from "./components/ContainerCreateTask";
import { TodoContext } from "./TodoContext";
import { Modal } from "./components/Modal";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    createTaskEvent,
    completeTodos,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <div className="container-app">
      <ContainerCreateTask  />
      <div className="container-search-items">
        <TodoCounter />
        <TodoSearch />



      
        <TodoList>
          {error && <p>Hubo un error ... </p>}
          {loading && <p>estamos cargando</p>}
          {!loading && !searchedTodos.length && <p>Crea tu primer todo</p>}

          {searchedTodos.map((item, index) => (
            <TodoItem
              key={index}
              text={item.text}
              completed={item.completed}
              onComplete={() => {
                completeTodos(item.text);
              }}
              deleteTodo={() => {
                deleteTodo(item.text);
              }}
            />
          ))}
        </TodoList>


        {openModal && (
            <Modal>
                <ContainerCreateTask />
            </Modal>
        )}
      </div>

      <button className="btn-add-todo-modal" onClick={() => {setOpenModal(true)}} > + </button>
    </div>
  );
}

export { AppUI };
