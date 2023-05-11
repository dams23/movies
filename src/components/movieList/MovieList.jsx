import { MovieCard } from '../movieCard/MovieCard';
import './movielist.css';
export const MovieList = ({ movies = [] }) => {
    return movies.length > 0 ? (
        <section className='movies-list__container'>
            <h1>Resultados</h1>
            <div className='movies-list'>
                {movies.map((m) => (
                    <MovieCard key={m.id} movie={m} />
                ))}
            </div>
        </section>
    ) : (
        <></>
    );
};
