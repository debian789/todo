import React from "react";
import { CreateTodoButton } from "../CreateTodoButton";
import "./ContainerCreateTask.css";

function ContainerCreateTask({ setOpenModal, openModal, addTodo }) {
  const [valueTodo, setValueTodo] = React.useState("");
  const cancel = () => {};
  const onChange = (event) => {
    setValueTodo(event.target.value);
  };

  const save = (event) => {
    event.preventDefault();
    addTodo(valueTodo);
    setValueTodo("");
  };

  return (
    <div className="container-create-task">
      <h2>Create new task</h2>
      <form onSubmit={save}>
        <textarea placeholder="Task..." value={valueTodo} onChange={onChange} />
        <div className="container-btn-task">
          <button 
            type="button" 
            className="btn-cancel-task"
            onClick={() => {
              setOpenModal(false);
           }}>
            Cancel
          </button>
          <CreateTodoButton />
        </div>
      </form>
    </div>
  );
}

export { ContainerCreateTask };
