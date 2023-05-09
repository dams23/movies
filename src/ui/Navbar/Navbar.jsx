import { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { types } from '../../types/types';
import { genres } from '../../data/genres';
export const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-sm '>
            <Link to='/' className='navbar-brand'>
                Home
            </Link>
            <div className='collapse navbar-collapse'>
                <ul className='nabvar-nav'>
                    <NavLink
                        className='nav-item dropdown nav-link dropdown-toggle'
                        role='button'
                        data-bs-toggle='dropdown'>
                        Categories
                        <ul className='dropdown-menu'>
                            {genres.map((genre) => (
                                <NavLink className='dropdown-item'>
                                    {genre.name}
                                </NavLink>
                            ))}
                        </ul>
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
};
