import logo from './logo.svg';
import './App.css';
import React from 'react';
import {TodoCounter} from './components/TodoCounter'
import {TodoItem} from './components/TodoItem'
import {TodoList} from './components/TodoList'
import {TodoSearch} from './components/TodoSearch'
import {ContainerCreateTask} from './components/ContainerCreateTask'



const todos =  [
  {text: 'Cotar cebolla', completed: false},
  {text: 'Cotar cebolla 1', completed: false},
  {text: 'Cotar cebolla 2', completed: true}
]

function App() {
  return (
    <div className='container-app'>
      <ContainerCreateTask />
      <div className='container-search-items'>
        <TodoCounter />
        <TodoSearch />
        <TodoList >
          {todos.map((item, index) => (
            <TodoItem key={index} text={item.text}  completed={item.completed} />
          ))}       
        </TodoList>
      </div>
    </div>
  );
}

export default App;
