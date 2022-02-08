import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO, EDIT_TASK, SAVE_TODO } from "./types";

let INIT_STATE = {
    todosData: [],
    editedTodo: {}
}

export const todosReduser = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todosData: [...state.todosData, action.payload] }
        case DELETE_TODO:
            return { ...state, todosData: action.payload }
        case TOGGLE_TODO:
            return { ...state, todosData: action.payload }
        case EDIT_TODO:
            return { ...state, todosData: action.payload }
        case SAVE_TODO:
            return { ...state, editedTodo: action.payload }
        case EDIT_TASK:
            return { ...state, todosData: action.payload }
        default:
            return state;
    }
}

