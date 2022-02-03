import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ToDoForm from './components/ToDoForm/ToDoForm'
import "./style/style.css"

import ToDoList from './components/ToDoList/ToDoList'

import { deleteTodo, toggleTodo } from './store/actions';


const App = () => {
    const data = useSelector(state => state.todos.todosData)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTodo(id, data))
    }
    const toggleTask = (id) => {
        dispatch(toggleTodo(id, data))
    }



    return (
        <div className="container_wrapper">
            <div className='container'>
                <h1>Tasks: {data.length} </h1>
            </div>

            <ToDoForm />
            <ToDoList
                data={data}
                handleDelete={handleDelete}
                toggleTask={toggleTask} />

        </div>
    )
}

export default App;