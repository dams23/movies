import { useSelector, useDispatch } from 'react-redux'
import { genres } from '../../data/genres';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {

    const dispatch = useDispatch();
    const { username } = useSelector( state => state.auth );

    const handleLogout = () => {
    }

    return (
        <nav className='navbar navbar-dark bg-dark mb-4'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-link dropdown'>
                    <NavLink className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                        Peliculas
                    </NavLink> 
                    <ul className='dropdown-menu'>
                        {
                            genres.map( genre => (<li key={genre.id}>{genre.name}</li>))
                        }
                    </ul>
                </li>
            </ul>
            <span className='navbar-brand'>
                { username }
            </span>
            
            <button 
                className='btn btn-outline-danger'
                onClick={ handleLogout }
            >
                <i className='fas fa-sign-out-alt'></i>
                <span> Salir</span>
            </button>

        </nav>
    )
}