import { movies } from '../data/movies';

export const getMoviesByTitle = (title = '') => {
    if (title === '') {
        return [];
    }
    title = title.toLowerCase();
    return movies.filter((m) => m.title.toLowerCase().includes(title));
};
