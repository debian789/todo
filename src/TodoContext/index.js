import React from "react";
import {useLocalStorage} from './useLocalStorage'


const TodoContext = React.createContext();

const todos =  [
    {text: 'Cotar', completed: false},
    {text: 'Cotar cebolla 1', completed: false},
    {text: 'Cotar cebolla 2', completed: true}
  ]
  

  
function createTaskEvent() {
    console.log('hooola')
  }


function TodoProvider(props) {

    const {item:todoValue, saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false); 

    const totalTodos = todoValue.length;
    const completedTodo = todoValue.filter(item => !!item.completed).length;
  
    let searchedTodos = [];
  
    if (!searchValue.length >= 1) {
      searchedTodos = todoValue;
    } else {
      searchedTodos = todoValue.filter (todo => {
        const todoText   = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      })
    }
  
  
  
  
    const completeTodos = (text) => {
      const todoIndex = todoValue.findIndex(todo =>  todo.text == text);
      const newTodos = [...todoValue];
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      //setItem(newTodos);
      saveTodos(newTodos);
    }
  
    const deleteTodo = (text) => {
      console.log(text)
      const todoIndex = todoValue.findIndex(todo =>  todo.text == text);
      const newTodos = [...todoValue];
      newTodos.splice(todoIndex, 1);    
      saveTodos(newTodos);
     // setItem(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodo,    
            searchValue,
            setSearchValue,
            completeTodos,
            deleteTodo,
            createTaskEvent,
            searchedTodos,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoProvider, TodoContext}
// <TodoContext.Consumer></TodoContext.Consumer>