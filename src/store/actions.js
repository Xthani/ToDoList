import { ADD_TODO, SEND_TODO, DELETE_TODO } from "./types";
export const addTodo = (newTask) => ({ type: ADD_TODO, payload: newTask });
// export const sentTodo = () => ({ type: SEND_TODO });
// export const deleteTodo = () => ({ type: DELETE_TODO });

