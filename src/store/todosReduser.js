import { ADD_TODO, SEND_TODO, DELETE_TODO } from "./types";

let INIT_STATE = {
    todosData: []
}

export const todosReduser = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todosData: [...state.todosData, action.payload] }
        case DELETE_TODO:
            return
        default:
            return state;
    }
}

