import React, { useState } from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo, editTask } from "../../../store/actions";

const EditForm = ({ item }) => {
    const { editedTodo, todosData } = useSelector(state => state.todos)
    const [userInput, setUserInput] = useState(editedTodo.task);
    const dispatch = useDispatch()

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

    // проверка на пустое значение или пробел, изменение или удаление
    const handleEdit = (value) => {
        if (value.trim() !== '') {
            dispatch(editTask({ ...editedTodo, task: userInput }, todosData))
            setUserInput("")
        } else {
            dispatch(deleteTodo(item.id, todosData))
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