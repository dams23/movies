import { moviesImages } from '../../helpers/moviesImages';
import { movies } from '../../data/movies';
import './movies.css';
import { Link } from 'react-router-dom';

export const MovieCover = ({ idMovie }) => {
    const movie = movies.find((movie) => movie.id === idMovie);
    const style = {
        width: '100%',
        height: '50vh',
        backgroundImage: `url(${moviesImages(`./${movie.poster}`)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backdropFilter: `blur('4px')`,
    };
    return (
        <>
            <div className='cover-movie' style={style}>
                <div className='cover-movie__header'>
                    <h1>{movie.title}</h1>
                    <span>
                        <b>Release: </b>
                        <small>{movie.releaseDate}</small>
                    </span>
                </div>
            </div>
            <article className='movie-container'>
                <header className='movie-container__header'>
                    <span>
                        <b>Duration: </b>120m
                    </span>
                </header>
                <main>
                    <p>{movie.description}</p>
                </main>
                <footer>
                    <h5>Genres</h5>
                    <ul>
                        {movie.genres.map((g) => (
                            <li>
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
            <div className='video-responsive'>
                <iframe
                    src={`https://www.youtube.com/embed/${movie.trailer}`}
                    allowFullScreen
                    title={movie.title}
                />
            </div>
        </>
    );
};
