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
            if (value == editedTodo.task) {
                dispatch(editTask({ ...editedTodo, task: editedTodo.task }, todosData))
            } else if (window.confirm('ПОДТВЕРДИТЕ ИЗМЕНЕНИЯ\nБыло: ' + editedTodo.task + '\nСтало: ' + value)) {
                dispatch(editTask({ ...editedTodo, task: value }, todosData))
            } else {
                dispatch(editTask({ ...editedTodo, task: editedTodo.task }, todosData))
            }
        } else {
            if (window.confirm('Удалить TASK? ' + editedTodo.task)) {
                dispatch(deleteTodo(item.id, todosData))
            }
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