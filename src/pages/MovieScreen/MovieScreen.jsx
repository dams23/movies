import { MovieCover } from '../../components/movieCover/MovieCover'
import { MovieDetails } from '../../components/movieDetails/MovieDetails'
import { MoviePlayer } from '../../components/moviePlayer/MoviePlayer';
import { getMovieById } from '../../selectors/getMovieById';

export const MovieScreen = ({id}) => {
  const movie = getMovieById(id);
  return (
    <>
      <MovieCover idMovie={id} />
      <MovieDetails movie={movie} />
      <MoviePlayer movie={movie} />
    </>
  )
}
