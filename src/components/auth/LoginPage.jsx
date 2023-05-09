import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/index';
import { startLogin } from '../../actions/auth';

import './loginpage.css';

export const LoginPage = () => {
    const dispatch = useDispatch();
    const [formLoginValues, handleInputChange] = useForm({
        usermame: '',
        password: '',
    });
    const { username, password } = formLoginValues;
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(username, password));
    };

    return (
        <div>
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
                                        <input
                                            type='submit'
                                            value='Login'
                                            className='btnSubmit'
                                            onClick={handleLogin}
                                        />
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
