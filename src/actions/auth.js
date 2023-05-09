import { types } from '../types/types';
import Swal from 'sweetalert2';
import { users } from '../data/users';

export const startLogin = (username, password) => {
    return async (dispatch) => {
        const user = await users.find(
            (user) => user.username === username && user.password === password
        );
        if (user) {
          dispatch( login({
            username: user.username,
            role:user.role
        }) )
            Swal.fire(`Bienvenido ${username}`, '', 'success');
        } else {
            Swal.fire('Error', 'usuario o contraseña incorrectos', 'error');
        }
    };
};

const login = ( user ) => ({
    types: types.authLogin,
    payload: user,
});

export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(logout());
    };
};

const logout = () => ({ types: types.authLogout });
