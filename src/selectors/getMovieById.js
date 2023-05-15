import { movies } from '../data/movies';

export const getMovieById = (id) => {

  return movies.find((movie) => movie.id === +id);

};
