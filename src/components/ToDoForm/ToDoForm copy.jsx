import React, { useState } from "react";
import EditIcon from '@material-ui/icons/Edit';
import { addTodo, sentTodo } from "../../store/actions";
import { useSelector } from "react-redux";
import ToDoList from "../ToDoList/ToDoList";

//
const ToDoForm = ({ addTodo, sentTodo }) => {
    // const test = useSelector(state => state.todos.todosData);
    // console.log(test)



    const [count, setCount] = useState(0);
    const taskNumber = () => setCount(count + 1)

    // const [userTask, setUserTask] = useState('')
    const onMessageChange = (e) => {
        let text = e.currentTarget.value;
        addTodo(text)
    }


    const userTask = () => {

    }
    const handleClick = () => {
        sentTodo()
    }
    const handleClickEditIcon = () => handleClick();

    return (
        <div className="todolist_wrapper">
            <h1>Tasks: {count}</h1>
            <div className="input_wrapper" >
                <input
                    onChange={onMessageChange}
                    type="text"
                    value={userTask}
                    placeholder="Ввод..."
                />

            </div>
            <div className="btn_wrapper">
                <EditIcon
                    onClick={taskNumber, handleClickEditIcon}
                    className="btn"
                />
            </div>
        </div>
    )
}

export default ToDoForm;
