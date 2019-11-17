import React from 'react';
import style from './Setting.module.css';
import { reduxForm, Field } from 'redux-form';
import { require, minValue } from '../../utils/validaters/validaters';
import { Input } from '../common/FormControls/FormControls';


const Settings = () => {
    return (
        <div className={style.setting}>
            <SettingsReduxForm />
        </div>
    );
};

const min = minValue(2);

const SettingsForm = (props) => {
    return (
        <form>
            <div>
                <Field name="set" validate={[require, min]} component={Input} placeholder="write here" />
            </div>
        </form>
    )
}

const SettingsReduxForm = reduxForm({
    form: 'settings'
})(SettingsForm)

export default Settings;