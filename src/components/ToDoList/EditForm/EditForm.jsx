import React, { useState } from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo, editTask } from "../../../store/actions";
import CheckIcon from '@material-ui/icons/Check';

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

    // Заменяет объект ToDo на новый 
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
                className="inputDataEdit"
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress} />
            <CheckIcon
                className="editiconEdit"
                onClick={() => handleEdit(userInput)} />
        </div >
    )
}

export default EditForm;