import { Link} from 'react-router-dom';

import './navbar.css';

export const Navbar = () => {
    return (
        <header>
            <nav className='navbar'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/'>Genres</Link>
                    </li>
                    <li>
                        <Link to='/search'>Search</Link>
                    </li>
                    <li>
                        <Link to='/'>My list</Link>
                    </li>
                    <li>
                        <Link to='/'>Log Out</Link>
                    </li>
                    <li>
                        <Link to='/'>Log In</Link>
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
