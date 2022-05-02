import React from "react";
import {CreateTodoButton} from '../CreateTodoButton'
import './ContainerCreateTask.css'
import createImg from '../../images/create.png'

function ContainerCreateTask(props) {
    return (
        <div className='container-create-task'>
            <h2>Create new task</h2>
            <label>Task Name</label>
            <input type="text" placeholder="Task..."/>
            <CreateTodoButton createTaskEvent={props.createTaskEvent}/>
          {/* <img src={createImg}/>*/}
        </div>
    )
}

export {ContainerCreateTask}