import React, { useState } from 'react';
import style from './ProfileStatus.module.css';

const ProfileStatusWithHook = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const activeEditMode = () => {
        setEditMode(true);
    }

    const deactiveEditMode = () => {
        setEditMode(false);

        props.updateStatus(status);
    }

    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={style.status}>
            {!editMode &&
                <div>
                    <span onDoubleClick={activeEditMode} >{ props.status || <span className={style.unStatus}>No Status</span>}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onChangeStatus} onBlur={deactiveEditMode} autoFocus={true}
                    />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHook;