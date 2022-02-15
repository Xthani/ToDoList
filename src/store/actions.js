import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, CHECK_EDIT, EDIT_TASK, SAVE_TODO } from "./types";

// добавляет новый объект ToDo
export const addTodo = (newToDo) => {
    return (
        {
            type: ADD_TODO,
            payload: newToDo
        }
    )
};
// удаляет объект ToDo
export const deleteTodo = (payload, data) => {
    return (
        {
            type: DELETE_TODO,
            payload: data.filter(item => item.id != payload)
        })
};
// Изменяет значение isCompleted в объекте ToDo
export const toggleTodo = (payload, data) => {
    return (
        {
            type: TOGGLE_TODO,
            payload: data.map(item => item.id == payload ? { ...item, isCompleted: !item.isCompleted } : item)
        }
    )
}
// Изменяет значение itemCheckEdit в объекте ToDo
export const сheckEdit = (payload, data) => {
    return (
        {
            type: CHECK_EDIT,
            payload: data.map(item => item.id == payload ? { ...item, itemCheckEdit: !item.itemCheckEdit } : { ...item, itemCheckEdit: item.itemCheckEdit = false })
        }
    )
}
// Сохраняет объект ToDo
export const saveTodo = (editedTodo) => {
    return (
        {
            type: SAVE_TODO,
            payload: editedTodo
        }
    )
}
// Заменяет объект ToDo на новый 
export const editTask = (editedToDo, todos) => ({
    type: EDIT_TASK,
    payload: todos.map(item => item.id == editedToDo.id ? editedToDo : item)
})  