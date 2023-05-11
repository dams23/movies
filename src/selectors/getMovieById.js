import { movies } from '../data/movies';

export const getMoiveById = (id) => {

  return movies.find((movie) => movie.id === id);

};
