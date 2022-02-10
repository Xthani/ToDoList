import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/actions';
import SendIcon from '@material-ui/icons/Send';

const ToDoForm = () => {
    const [userInput, setUserInput] = useState('');

    const dispatch = useDispatch()
    const handleAdd = (value) => {
        dispatch(addTodo({ task: value, id: Date.now(), isCompleted: false, itemEdit: false }))
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
        <div className='todoform_wrapper' >
            <div className="container">
                <div className='send_form_wrapper' >
                    <input
                        className='inputData'
                        value={userInput}
                        type='text'
                        onChange={handleChange}
                        onKeyDown={handleKeyPress}
                        placeholder='ввод...' />
                    <SendIcon
                        className='sendicon'
                        onClick={() => handleAdd(userInput)} />
                </div>
            </div>
        </div>

    )
}

export default ToDoForm;
