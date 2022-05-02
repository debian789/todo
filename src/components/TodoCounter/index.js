import React from 'react';



function TodoCounter ({totalTodos, completedTodo}) {
    return (
        <React.Fragment>
            <h1>Your Tasks</h1>
            <h2>Has completado {completedTodo} de {totalTodos} TODOs</h2>            
        </React.Fragment>
    )

}

export {TodoCounter};