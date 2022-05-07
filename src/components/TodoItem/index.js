import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li
      className={`itemList ${
        props.completed ? "doneItemList" : "openItemList"
      }`}
    >
      <span
        onClick={props.onComplete}
        className={`itemCheck ${props.completed ? "doneItem" : "openItem"}`}
      >
        {props.completed ? "√" : ""}
      </span>
      <label
        className={` ${props.completed ? "doneItemText" : "openItemText"}`}
      >
        {props.text}
      </label>
      <button className="deleteItem" onClick={props.deleteTodo}>
        X
      </button>
    </li>
  );
}

export { TodoItem };
