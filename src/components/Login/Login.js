import React from 'react';
import style from './Login.module.css';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormControls/FormControls';
import { require } from '../../utils/validaters/validaters';
import { login } from './../../Redux/auth-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div className={style.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
}

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Input} validate={[require]} name={"email"} placeholder={"login"} />
                </div>
                <div>
                    <Field component={Input} validate={[require]} name={"password"} placeholder={"password"} type="password" />
                </div>
                {
                  props.error &&  <div className={style.groupError}>
                        <span>{props.error}</span>
                    </div>
                }

                <div>
                    <Field component={Input} type={"checkbox"} name={"rememberMe"} /> remember me
                    </div>

                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);