import { moviesImages } from '../../helpers/moviesImages';
import { movies } from '../../data/movies';
import './movies.css';
import { MoviePlayer } from '../moviePlayer/MoviePlayer';
import { MovieDetails } from '../movieDetails/MovieDetails';

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
        </>
    );
};
