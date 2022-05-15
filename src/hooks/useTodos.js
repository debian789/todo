import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import {KEY_STORAGE} from './todoConst';

function useTodos() {
  const {
    item: todoValue,
    saveTodos,
    loading,
    error,
    sincronizedItem,
    sincronizedItemTodo
  } = useLocalStorage(KEY_STORAGE, []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const totalTodos = todoValue.length;
  const completedTodo = todoValue.filter((item) => !!item.completed).length;
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todoValue;
  } else {
    searchedTodos = todoValue.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodos = (text) => {
    const todoIndex = todoValue.findIndex((todo) => todo.text == text);
    const newTodos = [...todoValue];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    console.log(text);
    const todoIndex = todoValue.findIndex((todo) => todo.text == text);
    const newTodos = [...todoValue];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    if (text) {
      const newTodos = [...todoValue];
      newTodos.unshift({
        completed: false,
        text,
      });
      saveTodos(newTodos);
    }
  };

  return ({
        loading,
        error,
        totalTodos,
        completedTodo,
        searchValue,
        setSearchValue,
        completeTodos,
        deleteTodo,
        searchedTodos,
        openModal,
        setOpenModal,
        addTodo,
        sincronizedItem,
        sincronizedItemTodo
      }
  );
}

export { useTodos };
