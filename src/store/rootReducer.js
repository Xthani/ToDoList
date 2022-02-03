import { combineReducers, createStore } from 'redux';
import { todosReduser } from './todosReduser';

export const rootReduser = combineReducers({
    todos: todosReduser
})

export const store = createStore(rootReduser)