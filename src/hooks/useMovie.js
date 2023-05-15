import { useEffect, useState } from 'react';
import { getMovieById } from '../selectors/getMovieById';
import { movies } from '../data/movies';

export const useMovie = (movieId) =>{
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(()=> {
    const getMovie = async () =>{
      try{
        setLoading(true);
        setLoading(false);
        setError(false);
        const movie = getMovieById(movieId); 
        setState({ ...movie});
      } catch(err){
        setError(true);
      }
    }
    getMovie();
  },[movieId]);
  useEffect(()=>{
    sessionStorage.setItem(movieId, JSON.stringify(state));
  },[movieId, state]);
  return {state, loading, error};
}