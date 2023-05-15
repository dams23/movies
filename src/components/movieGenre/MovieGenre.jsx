import { Link } from 'react-router-dom';
import { getMoviesByGenresId } from '../../selectors/getMoviesByGenresId';
import { MovieCard } from '../movieCard/MovieCard';
import './movieGenre.css';

export const MovieGenre = ({ genre }) => {
    const movies = getMoviesByGenresId(genre.id);
    return (
        <section className='genre-movies__container'>
            <Link to={`./genre/${genre.id}`}>
                <h1>{genre.name}</h1>
            </Link>
            <span className='divisor'></span>
            <div className='genre-movies__list'>
                {movies.map((m) => (
                    <MovieCard key={m.id} movie={m} />
                ))}
            </div>
        </section>
    );
};
