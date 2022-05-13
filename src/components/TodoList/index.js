import "./TodoList.css";

function TodoList({error, loading, searchedTodos, onError, onLoading, render}) {
  return (
    <div className="container-list-items">

      {error && onError()}
      {loading && onLoading()}
      {!loading && !searchedTodos.length && <p>Crea tu primer todo</p>}



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
