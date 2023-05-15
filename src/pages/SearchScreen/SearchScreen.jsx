import { useEffect, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { useForm } from '../../hooks';
import { getMoviesByTitle } from '../../selectors/getMoviesByTitle';
import { NotResult } from '../../components/NotResults/NotResult';
import { MovieList } from '../../components/movieList/MovieList';
import { Loader } from '../../components/loader/Loader';

import './searchScreen.css';

export const SearchScreen = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const [searchValue, handleInputChange] = useForm({
        search: '',
    });

    const { search } = searchValue;

    useEffect(() => {
        setLoading(true);
        setMovies(getMoviesByTitle(search));
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [search]);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const singleValue = queryParams.get('title');
        if (singleValue) {
            setMovies(getMoviesByTitle(singleValue));
        }
        queryParams.delete('title');
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);
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
                {loading ? (
                    <Loader />
                ) : movies.length === 0 ? (
                    <NotResult />
                ) : (
                    <MovieList movies={movies} />
                )}
            </div>
        </>
    );
};
