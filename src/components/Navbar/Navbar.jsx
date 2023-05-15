import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { genres } from '../../data/genres';
import './navbar.css';
import { useForm } from '../../hooks';

export const Navbar = () => {
    const [params, setParams] = useSearchParams();
    const [formTitleValues, handleInputChange] = useForm({
        title: '',
    });
    const user = localStorage.getItem('user');

    const navigate = useNavigate();
    const { title } = formTitleValues;
    const searchMovie = (e) => {
        setParams({ title });
        navigate('/search/');
    };
    const handleLogOut= ()=>{
        localStorage.removeItem('user');
    }
    return (
        <header>
            <nav className='navbar'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='drop-genres'>
                        <button className='drop-downbtn'>Genres</button>
                        <ul className='drop-down'>
                            {genres.map((genre) => (
                                <li key={genre.id}>
                                    <Link to={`/genres/${genre.id}`}>
                                        {genre.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li>
                        <Link to='/search'>Search</Link>
                    </li>
                    {user ? (
                        <>
                            <li>
                                <Link to='/'>My list</Link>
                            </li>
                            <li>
                                <Link onClick={handleLogOut} to='/'>Log Out</Link>
                            </li>
                        </>
                    ) : (
                        <li>
                            <Link to='/login'>Log In</Link>
                        </li>
                    )}
                </ul>
                <form className='search-container'>
                    <input
                        type='text'
                        className='search-input'
                        placeholder='Search a movie...'
                        name='title'
                        value={title}
                        onChange={handleInputChange}
                    />
                    <button
                        className='search-btn'
                        onClick={searchMovie}
                        type='submit'>
                        <i className='bx bx-search-alt'></i>
                    </button>
                </form>
            </nav>
        </header>
    );
};
