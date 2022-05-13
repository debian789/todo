import "./TodoList.css";

function TodoList({
  error, 
  loading, 
  searchedTodos, 
  onError, 
  onLoading, 
  render,
  searchText,
  totalTodos
  }) {
  return (
    <div className="container-list-items">

      {error && onError()}
      {loading && onLoading()}
      {!loading && !totalTodos && <p>Crea tu primer todo</p>}
      {!!searchText && !searchedTodos.length && <p>No existen resultados para {searchText}</p>}



      <ul>
        {
          searchedTodos.map((item, index) => render(item, index))
        }
        <br />
        <br />
        <br />
        <br />
        <br />
      </ul>
    </div>
  );
}

export { TodoList };
