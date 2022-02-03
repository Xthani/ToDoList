import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from '../../store/actions';

const ToDoForm = ({ addTask }) => {
    const [userInput, setUserInput] = useState('');


    const data = useSelector(state => state.todos.todosData)
    const dispatch = useDispatch()
    const handle = () => {
        dispatch(addTodo({ task: userInput, id: Date.now(), isCompleted: false }))
    }
    const onClick = () => {
        handle()
    }

    // получаем значение вводимое в input 
    const handleChange = ({ currentTarget: { value } }) => {
        setUserInput(value)
    }

    // добавление taska
    const handleSubmit = (e) => {
        // метод preventDefault()
        e.preventDefault()
        // передаем в качестве аргумента userInput
        addTask(userInput)
        // зачищаем строку после выполнения
        setUserInput('')
    }

    // отлавливает нажатие кнопки Enter и вызывает hendleSubmit(e)
    const handleKeyPress = ({ key }) => {
        if (key === 'Enter') {
            handleSubmit(key)
        }
    }

    return (
        <form
            className="todolist_wrapper"
            onSubmit={handleSubmit}>
            <div className="container">
                <input
                    value={userInput}
                    type='text'
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                    placeholder='ввод...'
                />
                <button onClick={onClick}>Добавить</button>
            </div>
        </form>
    )
}

export default ToDoForm;
