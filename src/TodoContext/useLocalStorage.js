import React from 'react';

function useLocalStorage(nameLocal, initialValue) {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {      
        try {
          const localStorageItem = localStorage.getItem(nameLocal);
          let parseItem;
        
          if (!localStorageItem) {
            localStorage.setItem(nameLocal, JSON.stringify(initialValue));
            parseItem = initialValue;
          } else {
            parseItem = JSON.parse(localStorageItem);
          }
  
          setItem(parseItem);
          setLoading(false);
  
        } catch(error) {
          setError(error);
        }
        
      },1000)
    });
  
  
    
  
    const saveTodos = (newTodos) => {
      try {
        const stringTodos = JSON.stringify(newTodos);
        localStorage.setItem(nameLocal, stringTodos);
        setItem(newTodos);
      } catch (error) {
        setError(error)
      }
    }
  
  
    return {
      item,
      saveTodos,
      loading,
      error
    }
  
  }


  export {useLocalStorage};