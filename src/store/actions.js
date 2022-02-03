import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO } from "./types";


export const addTodo = (newTask) => ({ type: ADD_TODO, payload: newTask });
export const deleteTodo = (payload, data) => ({ type: DELETE_TODO, payload: data.filter(item => item.id != payload) });
export const toggleTodo = (payload, data) => (
    { type: TOGGLE_TODO, payload: data.map(item => item.id == payload ? { ...item, isCompleted: !item.isCompleted } : item) })

export const editTodo = (editTask) => ({ type: EDIT_TODO, payload: editTask });