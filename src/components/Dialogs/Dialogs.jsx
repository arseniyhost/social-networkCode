import React from 'react';
import style from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { reduxForm, Field } from 'redux-form';
import { require, maxLengthSymbols } from '../../utils/validaters/validaters';
import { Textarea } from '../common/FormControls/FormControls';

const Dialogs = (props) => {
    let dialogElements = props.dialog.map(d => <Dialog name={d.name} key={d.id} id={d.id} />);
    let messageElements = props.message.map(m => <Message message={m.message} key={m.id} />);

    let onSubmit = (values) => {
        props.addMessage(values.message);
    }

    return (
        <div>
            <div className={style.title}><h2>{props.title}</h2></div>
            <div className={style.dialogsContainer}>
                <div className={style.dialogs}>
                    {dialogElements}
                </div>
                <div className={style.messages}>
                    {messageElements}
                    <DialogsReduxForm onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    );
};

const maxLength50 = maxLengthSymbols(50);

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[require, maxLength50]} name={"message"} placeholder="Enter your message" />
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm({
    form: 'messages'
})(DialogsForm);

export default Dialogs;