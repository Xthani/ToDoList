import React from 'react'
import { useSelector } from 'react-redux'
import ToDoForm from './components/ToDoForm/ToDoForm'
import "./style/style.css"
import ToDoList from './components/ToDoList/ToDoList'

const App = () => {
    const data = useSelector(state => state.todos.todosData)

    return (
        <div className="container_wrapper">
            <div className='container'>
                <h1>Tasks: {data.length} </h1>
            </div>
            <ToDoForm />
            <ToDoList />
        </div>
    )
}

export default App;