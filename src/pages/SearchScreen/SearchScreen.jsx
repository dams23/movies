import { useEffect, useState } from 'react';
import { useForm } from '../../hooks';
import { getMoviesByTitle } from '../../selectors/getMoviesByTitle';
import { MovieCard } from '../../components/movies/MovieCard';

import './searchScreen.css';
import { NotResult } from '../../components/NotResults/NotResult';

export const SearchScreen = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, handleInputChange] = useForm({
        search: '',
    });
    const { search } = searchValue;
    useEffect(() => {
        setMovies(getMoviesByTitle(search));
    }, [search]);

    return (
        <>
            <div className='search-header'>
                <form className='search-container'>
                    <input
                        type='text'
                        className='search-input'
                        placeholder='Search a movie...'
                        name='search'
                        value={search}
                        onChange={handleInputChange}
                    />
                    <i className='bx bx-search-alt'></i>
                </form>
            </div>
            <span className='search-divisor'></span>
            <div className='search-results'>
                {movies.length === 0 && search !== '' ? (
                    <NotResult />
                ) : (
                    movies.map((m) => <MovieCard key={m.id} movie={m} />)
                )}
            </div>
        </>
    );
};
