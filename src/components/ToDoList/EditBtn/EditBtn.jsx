import React from "react";
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import { useSelector, useDispatch } from "react-redux";
import { editTodo, saveTodo } from '../../../store/actions';

const EditBtn = ({ item }) => {
    const data = useSelector(state => state.todos.todosData)
    const dispatch = useDispatch()
    const editForm = (item) => {
        dispatch(editTodo(item.id, data))
        dispatch(saveTodo(item))
    }

    return (
        <>
            {
                item.itemEdit ?
                    <CheckIcon
                        className="editicon"
                        onClick={() => editForm(item)} /> :
                    <EditIcon
                        className="editicon"
                        onClick={() => editForm(item)} />
            }
        </>
    )
}

export default EditBtn;