import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsContols/FormsControls";
import {maxLength15, required} from "../../utils/validators/validator";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength15]} component={Input} name={'login'} placeholder={'Login'}/>
            </div>
            <div>
                <Field validate={[required, maxLength15]} component={Input} name={'password'} placeholder={'Password'}/>
            </div>
            <div>
                <Field component={Input} type={'checkbox'} name={'rememberMe'}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login