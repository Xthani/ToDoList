import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO, EDIT_TASK, SAVE_TODO } from "./types";


export const addTodo = (newTask) => ({ type: ADD_TODO, payload: newTask });
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
    return (
        {
            type: EDIT_TODO,
            payload: data.map(item => item.id == payload ? { ...item, itemEdit: !item.itemEdit } : item)
        }
    )
}
export const saveTodo = (editedTodo) => ({ type: SAVE_TODO, payload: editedTodo })
export const editTask = (newTask) => {
    return (
        {
            type: EDIT_TASK,
            payload: newTask
        })
};