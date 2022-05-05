import React from 'react';
import {AppUI} from './AppUI';
import { TodoProvider } from './TodoContext';

const todos =  [
  {text: 'Cotar', completed: false},
  {text: 'Cotar cebolla 1', completed: false},
  {text: 'Cotar cebolla 2', completed: true}
]







function createTaskEvent() {
  console.log('hooola')
}

function App() {



  // Se ejecuta previo al render
  // Con el array vacio solo se ejecuta una sola vez []
  // Si se le define un evento solo se ejecuta cuando el el evento es llamado
/*
  React.useEffect(()  => {
    console.log('use efect')
  },[totalTodos])
*/
  return (
    <TodoProvider>
      <AppUI   />
    </TodoProvider>
  );
}

export default App;
