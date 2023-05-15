import { genres } from '../data/genres';

export const getGenreById = (id) => {

  return genres.find((genre) => genre.id === +id);

};