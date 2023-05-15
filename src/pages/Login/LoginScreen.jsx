import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/index';
import { useState } from 'react';
import { getUser } from '../../selectors/getUser';
import Swal from 'sweetalert2';
import './loginScreen.css';

export const LoginScreen = () => {
    const navigate = useNavigate();
    const [user, useUser] = useState();
    const [formLoginValues, handleInputChange] = useForm({
        usermame: '',
        password: '',
    });
    const { username, password } = formLoginValues;
    const handleLogin = (e) => {
        e.preventDefault();
        const userLog = getUser(username, password);
        if(userLog) {
            localStorage.setItem('user',JSON.stringify(userLog));
            navigate('/');
        }
        else{
            Swal.fire({
                title: 'Error',
                text: 'Username or password incorrect',
                icon: 'error'
            });
        }
    };

    return (
        <div className='contenedor-login'>
            <div className='row login-title'>
                <h2>Movies App</h2>
            </div>
            <div className='row justify-content-center'>
                <div className='col-6 container login-container'>
                    <div className='row'>
                        <div className='col loginform'>
                            <h3>Inicio de Sesión</h3>
                            <div className='col'>
                                <form onSubmit={handleLogin}>
                                    <div className='form-group'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='Usuario'
                                            name='username'
                                            value={username}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <input
                                            type='password'
                                            className='form-control'
                                            placeholder='Contraseña'
                                            name='password'
                                            value={password}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <button
                                            type='submit'
                                            value='Login'
                                            className='btnSubmit'
                                            onClick={handleLogin}>
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
