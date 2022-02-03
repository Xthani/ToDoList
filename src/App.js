import React, { useState } from 'react'
import { Provider } from 'react-redux'
import ToDoForm from './components/ToDoForm/ToDoForm'
import ToDoList from './components/ToDoList/ToDoList'
import { store } from './store/rootReducer'
import "./style/style.css"

const App = () => {
    const [todos, setTodos] = useState([])

    // создание нового item-a с task-ой из input-а
    const addTask = (userInput) => {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(36).substring(2, 9),
                task: userInput,
                complete: false
            }
            // к имеющемуся массиву ...todos добавляем новый item
            setTodos([...todos, newItem])
        }
    }

    // ToDoList
    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    const handleToggle = (id) => {
        setTodos([
            ...todos.map((todo) =>
                todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
            )
        ])
    }

    return (
        <Provider store={store} >
            <div className="container_wrapper">
                <div className='container'>
                    <h1>Tasks: {todos.length} </h1>
                </div>

                <ToDoForm
                    addTask={addTask}
                />

                {todos.map((todo) => {
                    return (
                        <ToDoList
                            key={todo.id}
                            todo={todo}
                            toggleTask={handleToggle}
                            removeTask={removeTask}
                        />
                    )
                })}
            </div>
        </Provider >
    )
}

export default App;