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
import { ChangeAlert } from "./components/ChangeAlert";
import { TodoMessageLoad } from "./components/TodoMessageLoad";

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
    sincronizedItem,
    sincronizedItemTodo,
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
      <ContainerCreateTask
        setOpenModal={setOpenModal}
        openModal={openModal}
        addTodo={addTodo}
      />
      <div className="container-search-items">
        <TodoHeader loading={loading}>
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
          sincronizedItemTodo={sincronizedItemTodo}
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          searchText={searchValue}
          totalTodos={totalTodos}
          onError={() => <p>Hubo un error ... </p>}
          onLoading={() => <TodoMessageLoad/>}
          render={(item, index) => (
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
      <ChangeAlert sincronize={sincronizedItem} />
    </div>
  );
}

export default App;
