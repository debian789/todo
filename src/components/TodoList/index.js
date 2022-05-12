import "./TodoList.css";

function TodoList(props) {
  return (
    <div className="container-list-items">
      <ul>
        {props.children}
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
