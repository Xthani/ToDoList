import React, { useState } from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editTask } from "../../store/actions";

const EditForm = () => {

    const { editedTodo, todosData } = useSelector(state => state.todos)
    const [userInput, setUserInput] = useState(editedTodo.task);

    const dispatch = useDispatch()

    const handleEdit = (value) => {
        dispatch(editTask({ ...editedTodo, task: value }, todosData))
        setUserInput("")
    }

    // получаем значение вводимое в input 
    const handleChange = ({ currentTarget: { value } }) => {
        setUserInput(value)
    }

    // отлавливает нажатие кнопки Enter
    const handleKeyPress = ({ key }) => {
        if (key === 'Enter') {
            handleEdit(userInput)
        }
    }

    return (
        <div className="edit_form_wrapper">
            <input
                className="inputData"
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress} />
            <button onClick={() => handleEdit(userInput)}>редактировать</button>
        </div >
    )
}

export default EditForm;