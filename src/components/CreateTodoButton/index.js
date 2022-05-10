import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  return (
    <button className="create-task" onClick={props.createTaskEvent} type="submit">
      Create task
    </button>
  );
}

export { CreateTodoButton };
