import { useEffect, useState } from 'react';
import { useForm } from '../../hooks';
import { getMoviesByTitle } from '../../selectors/getMoviesByTitle';
import { NotResult } from '../../components/NotResults/NotResult';
import { MovieList } from '../../components/movieList/MovieList';

import './searchScreen.css';

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
                <div className='search-container'>
                    <input
                        type='text'
                        className='search-input'
                        placeholder='Search a movie...'
                        name='search'
                        value={search}
                        onChange={handleInputChange}
                    />
                    <i className='bx bx-search-alt'></i>
                </div>
            </div>
            <span className='search-divisor'></span>
            <div className='search-results'>
                {movies.length === 0 && search !== '' ? (
                    <NotResult />
                ) : (
                    <MovieList movies={movies} />
                )}
            </div>
        </>
    );
};
