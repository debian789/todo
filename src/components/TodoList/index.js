import "./TodoList.css";

function TodoList(props) {
  return (<div className="container-list-items">
      <ul>{props.children}</ul>
    </div>);
}

export { TodoList };
