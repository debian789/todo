import React from 'react';
import {AppUI} from './AppUI';

const todos =  [
  {text: 'Cotar', completed: false},
  {text: 'Cotar cebolla 1', completed: false},
  {text: 'Cotar cebolla 2', completed: true}
]

function createTaskEvent() {
  console.log('hooola')
}

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [todoValue, setTodoValue] = React.useState(todos)
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
    setTodoValue(newTodos);
  }

  const deleteTodo = (text) => {
    console.log(text)
    const todoIndex = todoValue.findIndex(todo =>  todo.text == text);
    const newTodos = [...todoValue];
    newTodos.splice(todoIndex, 1);    
    setTodoValue(newTodos);
  }

  return (
    <AppUI 
      totalTodos={totalTodos}
      completedTodo={completedTodo}    
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      completeTodos={completeTodos}
      deleteTodo={deleteTodo}
      createTaskEvent={createTaskEvent}
      searchedTodos={searchedTodos}
    />
  );
}

export default App;
