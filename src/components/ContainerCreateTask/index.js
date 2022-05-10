import React from "react";
import { CreateTodoButton } from "../CreateTodoButton";
import "./ContainerCreateTask.css";
import createImg from "../../images/create.png";
import { TodoContext } from "../../TodoContext";

function ContainerCreateTask(props) {
  const { setOpenModal, openModal, addTodo } = React.useContext(TodoContext);
  const [valueTodo, setValueTodo] = React.useState('');

  const cancel = () => {

  }

  const onChange = (event) =>  {
    setValueTodo(event.target.value);
  }

  const save = (event) => {
    event.preventDefault()
    addTodo(valueTodo);

     setValueTodo('');
    /** */
  }

  return (
    <div className="container-create-task">
      <button
        className="close-modal"
        onClick={() => {
          setOpenModal(false);
        }}
      >
        X
      </button>
      <form onSubmit={save}>
        <h2>Create new task</h2>
        <label>Task Name</label>
        <textarea  placeholder="Task..."  value = {valueTodo} onChange={onChange}/>
        <button type="button"> Cancel</button>
        <CreateTodoButton  />
      </form>
    </div>
  );
}

export { ContainerCreateTask };
