import React from 'react';
import {AppUI} from './AppUI';
import { TodoProvider } from './TodoContext';






/*
*/
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
