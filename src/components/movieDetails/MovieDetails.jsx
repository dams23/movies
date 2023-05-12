import { Link } from 'react-router-dom';

export const MovieDetails = ({ movie }) => {
    return (
        <article className='movie-container'>
            <header className='movie-container__header'>
                <span>
                    <b>Duration: </b> {movie.duration}m
                </span>
                <span>
                    <b>Director:</b> {movie.director}
                </span>
            </header>
            <main>
                <p>{movie.description}</p>
            </main>
            <footer>
                <p>
                    <b>Genres</b>
                </p>
                <ul>
                    {movie.genres.map((g) => (
                        <li key={g.id}>
                            <Link
                                to={`./genres/${g.id}`}
                                className='btn-genres'>
                                {g.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </footer>
        </article>
    );
};
