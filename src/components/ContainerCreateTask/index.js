import React from "react";
import { CreateTodoButton } from "../CreateTodoButton";
import "./ContainerCreateTask.css";
import createImg from "../../images/create.png";
import { TodoContext } from "../../TodoContext";

function ContainerCreateTask(props) {
  const { setOpenModal, openModal } = React.useContext(TodoContext);

  return (
    <div className="container-create-task">
      <button
        className="close-modal"
        onClick={() => {
          setOpenModal(false);
        }}
      >
        {" "}
        X{" "}
      </button>
      <h2>Create new task</h2>
      <label>Task Name</label>
      <input type="text" placeholder="Task..." />
      <CreateTodoButton createTaskEvent={props.createTaskEvent} />
      {/* <img src={createImg}/>*/}
    </div>
  );
}

export { ContainerCreateTask };
