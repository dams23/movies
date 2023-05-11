import { movies } from '../data/movies';

export const getMoviesByGenresId = (genreId = -1) => {
    if (genreId === -1) {
        return [];
    }
    return movies.filter((movie) => movie.genres.includes(genreId));
};
