import { Navigate } from 'react-router';
import { getGenreById } from '../../selectors/getGenreById';
import { NotResult } from '../../components/NotResults/NotResult';
import { MovieCard } from '../../components/movieCard/MovieCard';
import { getMoviesByGenresId } from '../../selectors/getMoviesByGenresId';
import { useParams } from 'react-router-dom';


export const GenresScreen = () => {
    const {id} = useParams();
    const genre = getGenreById(id);
    const movies = getMoviesByGenresId(id);
    return (
        <>
            {genre ? (
                <div>
                    <h1>{genre.name}</h1>
                    {movies.length > 0 ? (
                        movies.map((m) => <MovieCard key={m.id} movie={m} />)
                    ) : (
                        <NotResult />
                    )}
                </div>
            ) : (
                <Navigate to='./NotFound' />
            )}
        </>
    );
};
