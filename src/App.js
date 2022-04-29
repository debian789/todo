import logo from './logo.svg';
import './App.css';
import React from 'react';
import {TodoCounter} from './components/TodoCounter'
import {TodoItem} from './components/TodoItem'
import {TodoList} from './components/TodoList'
import {TodoSearch} from './components/TodoSearch'
import {CreateTodoButton} from './components/CreateTodoButton'



const todos =  [
  {text: 'Cotar cebolla', completed: false},
  {text: 'Cotar cebolla 1', completed: false},
  {text: 'Cotar cebolla 2', completed: true}
]

function App() {
  return (
    <React.Fragment>


      <h2>Create new task</h2>
      <label>Task Name</label>
      <input type="text" />
      <CreateTodoButton />
      




      <TodoCounter />
      
      
      <TodoSearch />
      <input placeholder='Cebolla' />
      <TodoList >

        {todos.map((item, index) => (
          <TodoItem key={index} text={item.text}  completed={item.completed} />
        ))}
        

      </TodoList>



    </React.Fragment>
  );
}

export default App;
