import { NavLink } from 'react-router-dom';

import './navbar.css';

export const Navbar = () => {
    return (
        <header>
            <nav className='navbar'>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Genres</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Search</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>My list</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Log Out</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Log In</NavLink>
                    </li>
                </ul>
                <form className='search-container'>
                    <input
                        type='text'
                        className='search-input'
                        placeholder='Search a movie...'
                    />
                    <button className='search-btn'>
                        <i className='bx bx-search-alt'></i>
                    </button>
                </form>
            </nav>
        </header>
    );
};
