import React from 'react'
import LoginForm from '../ui/loginForm/loginForm';
import styles from '../ui/loginForm/loginForm.module.css'


const Login = () => {
    const callbackUrl = '/dashboard';
    return (
        <div className={styles.container}>
            <LoginForm/>
        </div>
    )
}

export default Login