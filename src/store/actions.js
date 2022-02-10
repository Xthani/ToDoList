import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO, EDIT_TASK, SAVE_TODO } from "./types";

export const addTodo = (newToDo) => {
    return (
        {
            type: ADD_TODO,
            payload: newToDo
        }
    )
};
export const deleteTodo = (payload, data) => {
    return (
        {
            type: DELETE_TODO,
            payload: data.filter(item => item.id != payload)
        })
};
export const toggleTodo = (payload, data) => {
    return (
        {
            type: TOGGLE_TODO,
            payload: data.map(item => item.id == payload ? { ...item, isCompleted: !item.isCompleted } : item)
        }
    )
}

export const editTodo = (payload, data) => {
    // console.log("payload")
    // console.log(payload)
    // console.log("data")
    // console.log(data)
    return (
        {
            type: EDIT_TODO,
            payload: data.map(item => item.id == payload ? { ...item, itemEdit: !item.itemEdit } : item)
        }
    )
}

export const saveTodo = (editedTodo) => {
    // console.log("editedTodo")
    // console.log(editedTodo)
    return (
        {
            type: SAVE_TODO,
            payload: editedTodo
        }
    )
}


export const editTask = (editedToDo, todos) => ({
    type: EDIT_TASK,
    payload: todos.map(item => item.id == editedToDo.id ? editedToDo : item)
})