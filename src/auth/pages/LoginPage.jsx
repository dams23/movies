import { useEffect } from 'react';
import { useAuthStore, useForm } from '../../hooks';
import './LoginPage.css';

const loginFormFields = {
    userName: '',
    password: '',
};

export const LoginPage = () => {
    const { startLogin, errorMessage } = useAuthStore();
    const {
        userName,
        password,
        onInputChange: onLoginInputChange,
    } = useForm(loginFormFields);
    const loginSubmit = (event) => {
        event.preventDefault();
        startLogin(userName, password);
    };
    useEffect(() => {
        if (errorMessage !== undefined) {
        }
    }, [errorMessage]);
    return (
        <div className='container login-container'>
            <h3>Login</h3>
            <form>
                <div>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='username'
                        name='username'
                        value={userName}
                        onChange={onLoginInputChange}
                    />
                </div>
                <div>
                    <input
                        type='password'
                        className='form-control'
                        placeholder='password'
                        value={password}
                        onChange={onLoginInputChange}
                    />
                </div>
                <div>
                    <input type='submit' className='btnLogin' value='Login' />
                </div>
            </form>
        </div>
    );
};
