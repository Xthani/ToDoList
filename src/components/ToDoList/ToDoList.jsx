import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';

const ToDoList = ({ todo, toggleTask, removeTask }) => {

    return (
        <div >
            <div className="container">
                <div key={todo.id} className="task_wrapper">
                    <div
                        className={todo.complete ? "item-text strike" : "item-text"}
                        onClick={() => toggleTask(todo.id)}
                    >
                        {todo.task}
                    </div>
                    <div onClick={() => removeTask(todo.id)}>
                        <DeleteIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDoList;
