import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import EditForm from "../EditForm/EditForm";
import EditBtn from "./EditBtn";
import { useSelector } from "react-redux";

const ToDoList = ({ data, handleDelete, toggleTask, editForm, taskEdit }) => {

    return (
        <div className="todolist_wrapper" >
            <div className="container">
                <div>
                    {!!data.length && data.map(item => (
                        <div key={item.id} className={item.isCompleted ? "item-text strike" : "item-text"}>

                            <div className="task_text_wrapper" >
                                {item.itemEdit ? < EditForm taskEdit={taskEdit} item={item} /> :
                                    <p className="task_text" >{item.task}</p>}
                            </div>

                            <div className="icon_wrapper" >

                                {item.isCompleted ? null :
                                    <EditBtn
                                        item={item}
                                        editForm={editForm} />}

                                {item.isCompleted ?
                                    <CheckBoxIcon
                                        className="checkbox"
                                        onClick={() => toggleTask(item.id)} /> :
                                    <CheckBoxOutlineBlankIcon
                                        className="checkbox"
                                        onClick={() => toggleTask(item.id)} />}

                                <DeleteIcon
                                    className="deleteicon"
                                    onClick={() => handleDelete(item.id)} />

                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ToDoList;
