import { Navigate, useParams } from 'react-router-dom';
import { MovieDetails } from '../../components/movieDetails/MovieDetails';
import { MovieCover } from '../../components/movieCover/MovieCover';
import { useMovie } from '../../hooks/index';
import { Loader } from '../../components/loader/Loader';
import { MoviePlayer } from '../../components/moviePlayer/MoviePlayer';

import './moviescreen.css';

export const MovieScreen = () => {
    const { id } = useParams();
    const { state: movie, loading, error } = useMovie(id);
    if (loading) {
        return <Loader />;
    }
    if (error) {
        return <Navigate to='/NotFound'></Navigate>;
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
                trailer={movie.trailer}
            />
        </>
    );
};
