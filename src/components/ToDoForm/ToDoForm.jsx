import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/actions';

const ToDoForm = () => {
    const [userInput, setUserInput] = useState('');

    const dispatch = useDispatch()
    const handleAdd = (value) => {
        dispatch(addTodo({ task: value, id: Date.now(), isCompleted: false }))
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
        <>
            <div className="container">
                <input
                    value={userInput}
                    type='text'
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                    placeholder='ввод...'
                />
                <button onClick={() => handleAdd(userInput)}>Добавить</button>
            </div>
        </>

    )
}

export default ToDoForm;
