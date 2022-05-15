import React from "react";

function useLocalStorage(nameLocal, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);
  const [sincronizedItemTodo, setSincronizedItem] = React.useState(true);

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
        setSincronizedItem(true);
      } catch (error) {
        setError(error);
      }
    }, 3000);
  }, [sincronizedItemTodo]);

  const saveTodos = (newTodos) => {
    try {
      const stringTodos = JSON.stringify(newTodos);
      localStorage.setItem(nameLocal, stringTodos);
      setItem(newTodos);
    } catch (error) {
      setError(error);
    }
  };

  const sincronizedItem = () => {
    setLoading(true);
    setSincronizedItem(false);
  }

  return {
    item,
    saveTodos,
    loading,
    error,
    sincronizedItem
  };
}

export { useLocalStorage };
