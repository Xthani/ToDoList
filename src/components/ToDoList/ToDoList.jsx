import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import EditForm from "../EditForm/EditForm";

const ToDoList = ({ data, handleDelete, toggleTask }) => {
    const editTask = () => {
        return console.log(EditForm)
    }

    return (
        <div className="task_wrapper">
            <ul  >
                {data.length != 0 && data.map(item => (
                    <li
                        className={item.isCompleted ? "item-text strike" : "item-text"}
                    >
                        {item.task}
                        <DeleteIcon
                            className="deleteicon"
                            onClick={() => handleDelete(item.id)}
                        />
                        <EditIcon
                            className="editicon"
                            onClick={() => editTask()}
                        />
                        <input
                            className="checkbox"
                            type="checkbox"
                            onClick={() => toggleTask(item.id)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList;
