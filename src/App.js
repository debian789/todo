import logo from './logo.svg';
import './App.css';
import React from 'react';
import {TodoCounter} from './components/TodoCounter'
import {TodoItem} from './components/TodoItem'
import {TodoList} from './components/TodoList'
import {TodoSearch} from './components/TodoSearch'
import {ContainerCreateTask} from './components/ContainerCreateTask'



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


  return (
    <div className='container-app'>
      <ContainerCreateTask  createTaskEvent= {createTaskEvent} />
      <div className='container-search-items'>
        <TodoCounter 
          totalTodos={totalTodos}
          completedTodo={completedTodo}

        />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoList >
          {searchedTodos.map((item, index) => (
            <TodoItem key={index} text={item.text}  completed={item.completed} />
          ))}       
        </TodoList>
      </div>
    </div>
  );
}

export default App;
