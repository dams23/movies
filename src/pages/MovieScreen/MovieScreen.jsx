import { useParams } from 'react-router-dom';
import { MovieDetails } from '../../components/movieDetails/MovieDetails';
import { MovieCover } from '../../components/movieCover/MovieCover';
import { useMovie } from '../../hooks/useMovie';
import { Loader } from '../../components/loader/Loader';
import { MoviePlayer } from '../../components/moviePlayer/MoviePlayer';

import './moviescreen.css';

export const MovieScreen = () => {
    const { id } = useParams();
    const {state: movie, loading, error} = useMovie(id);
    if(loading) {
        return <Loader />;
    }
    if(error) {
        return <h1>Upss..</h1>
    }

    return (
        <>
        <MovieCover 
            poster={movie.poster}
            title={movie.title}
            releaseDate={movie.releaseDate}
        />
            <MovieDetails
                id={movie.id}
                title={movie.title}
                description={movie.description}
                director={movie.director}
                duration={movie.duration}
                genres={movie.genres}
                poster={movie.poster}
                releaseDate={movie.releaseDate}
            />
            <MoviePlayer 
                title={movie.title}
                trailer={movie.trailer}
            />
        </>
    );
};
