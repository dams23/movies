import { movies } from '../data/movies';

export const getMoviesByGenresId = (genreId = -1) => {
    if (genreId === -1) {
        return [];
    }
    const filterMovie = (movie) => {
        const genre = movie.genres;
        const genresFilterd = genre.map((g) => g.id === +genreId);
        if(genresFilterd.includes(true)){
            return true;
        }
        else {
            return false;
        }
    };
    return movies.filter(filterMovie);
};
