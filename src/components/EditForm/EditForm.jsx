import React, { useState } from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editTask } from "../../store/actions";

const EditForm = () => {

    const state = useSelector(state => state.todos.editedTodo)
    const [userInput, setUserInput] = useState(state.task);

    const dispatch = useDispatch()
    const handleAdd = (value) => {
        dispatch(editTask({ task: value, id: Date.now(), isCompleted: false, itemEdit: false }))
        setUserInput("")
    }

    // получаем значение вводимое в input 
    const handleChange = ({ currentTarget: { value } }) => {
        setUserInput(value)
    }

    // отлавливает нажатие кнопки Enter и вызывает hendleSubmit(e)
    const handleKeyPress = ({ key }) => {
        if (key === 'Enter') {
            handleAdd(userInput)
        }
    }

    return (
        <div>
            <input
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Введите изменения"
            />
            <button
                onClick={() => handleAdd(userInput)}
            >редактировать</button>
        </div >
    )
}

export default EditForm;