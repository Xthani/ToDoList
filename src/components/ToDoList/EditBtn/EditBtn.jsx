import React from "react";
import EditIcon from '@material-ui/icons/Edit';
import { useSelector, useDispatch } from "react-redux";
import { сheckEdit, saveTodo } from '../../../store/actions';

const EditBtn = ({ item }) => {
    const data = useSelector(state => state.todos.todosData)
    const dispatch = useDispatch()

    // Изменяет значение itemEdit в объекте ToDo
    // Сохраняет объект ToDo
    const editForm = (item) => {
        dispatch(сheckEdit(item.id, data))
        dispatch(saveTodo(item))
    }

    return (
        <>
            {
                item.itemCheckEdit ? null :
                    <EditIcon
                        className="editicon"
                        onClick={() => editForm(item)} />
            }
        </>
    )
}

export default EditBtn;