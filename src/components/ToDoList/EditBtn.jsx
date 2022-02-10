import React from "react";
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';

const EditBtn = ({ item, editForm }) => {
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