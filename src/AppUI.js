import logo from './logo.svg';
import './App.css';
import React from 'react';
import {TodoCounter} from './components/TodoCounter'
import {TodoItem} from './components/TodoItem'
import {TodoList} from './components/TodoList'
import {TodoSearch} from './components/TodoSearch'
import {ContainerCreateTask} from './components/ContainerCreateTask'



function AppUI({
    totalTodos,
    completedTodo,
    searchValue,
    setSearchValue,
    completeTodos,
    deleteTodo,
    createTaskEvent,
    searchedTodos
}) {
    return (   <div className='container-app'>
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
          <TodoItem 
            key={index} 
            text={item.text}  
            completed={item.completed} 
            onComplete={() => {completeTodos(item.text)}}
            deleteTodo={() => {deleteTodo(item.text)}} />
        ))}       
      </TodoList>
    </div>
  </div>)
}

export {AppUI}