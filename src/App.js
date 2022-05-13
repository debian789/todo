import React from "react";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { ContainerCreateTask } from "./components/ContainerCreateTask";
import { useTodos } from "./hooks/useTodos";
import { Modal } from "./components/Modal";
import { TodoHeader } from "./components/TodoHeader";
import { TodoCounter } from "./components/TodoCounter";
import "./App.css";
import { TodoSearch } from "./components/TodoSearch";

/*
 */
function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodo,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  // Se ejecuta previo al render
  // Con el array vacio solo se ejecuta una sola vez []
  // Si se le define un evento solo se ejecuta cuando el el evento es llamado
  /*
  React.useEffect(()  => {
    console.log('use efect')
  },[totalTodos])
*/
  return (
    <div className="container-app">
      <ContainerCreateTask />
      <div className="container-search-items">
        <TodoHeader loading = {loading}>
          <TodoCounter 
            totalTodos={totalTodos} 
            completedTodo={completedTodo} 
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}            
          />
        </TodoHeader>
        <TodoList 
          error = {error}
          loading = {loading}
          searchedTodos= {searchedTodos}
          searchText = {searchValue}
          totalTodos = {totalTodos}
          onError = {() =>  <p>Hubo un error ... </p>}
          onLoading = {() =>  <p>estamos cargando</p>}
          render = {(item, index) => (
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
          )}
        />

{/*
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
        </TodoList> */}
        {openModal && (
          <Modal>
            <ContainerCreateTask
              setOpenModal={setOpenModal}
              openModal={openModal}
              addTodo={addTodo}
            />
          </Modal>
        )}
      </div>

      <button
        className="btn-add-todo-modal"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
