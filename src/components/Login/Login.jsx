import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsContols/FormsControls";
import {maxLength15, required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router";
import style from './../common/FormsContols/FormsControls.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength15]} component={Input} name={'login'} placeholder={"Email"}/>
            </div>
            <div>
                <Field validate={[required, maxLength15]} component={Input} name={'password'} placeholder={'Password'} type={'password'}/>
            </div>
            <div>
                <Field component={Input} type={'checkbox'} name={'rememberMe'}/>remember me
            </div>
            { props.error && <div className={style.formSummaryError}>
                {props.error}
            </div> }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }
    if(props.isAuth) return <Redirect to={'/profile'}/>
    return (
        <div>
            <h1>Login(bTDjgpSY5_j_ABq)</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login, logout})(Login)