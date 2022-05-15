import "./TodoList.css";

function TodoList({
  error, 
  loading, 
  searchedTodos, 
  onError, 
  onLoading, 
  render,
  searchText,
  totalTodos,
  sincronizedItemTodo
  }) {
  return (
    <div className="container-list-items">
      {error && onError()}
      {loading && onLoading()}
      {!loading && !totalTodos && !searchText &&  <p>Crea tu primer todo</p>}
      {!!searchText && !searchedTodos.length && <p>No existen resultados para {searchText}</p>}
      {sincronizedItemTodo &&  <ul>
        {
          (!error && !loading) && searchedTodos.map((item, index) => render(item, index))
        }
        <br />
        <br />
        <br />
        <br />
        <br />
      </ul> }
    </div>
  );
}

export { TodoList };
