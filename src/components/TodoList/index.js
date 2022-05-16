import "./TodoList.css";
import {TodoMessageCreate} from '../TodoMessageCreate'
import {TodoMessageSearch} from '../TodoMessageSearch'

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
      {!loading && !totalTodos && !searchText && <TodoMessageCreate />}
      {!!searchText && !searchedTodos.length &&  <TodoMessageSearch searchText = {searchText}/>}
      { sincronizedItemTodo &&  <ul>
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
