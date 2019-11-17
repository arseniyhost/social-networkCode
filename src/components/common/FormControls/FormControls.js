import React from 'react';
import style from './FormControls.module.css';

export const Textarea = ({ input, meta: { touched, error }, ...props }) => {
    const hasError = touched && error;
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}


export const Input = ({ input, meta: { touched, error }, ...props }) => {
    const hasError = touched && error;
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>
                <input {...input} {...props} />
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

