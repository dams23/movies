import { useEffect, useState } from 'react';
import { getMovieById } from '../selectors/getMovieById';

export const useMovie = (movieId) => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        const getMovie = async () => {
            try {
                setLoading(true);
                setError(false);
                const movie = getMovieById(movieId);
                if (movie === undefined){
                    setLoading(false);
                    throw new Error('Movie not found');
                }
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
                setState({ ...movie });
            } catch (err) {
                setError(true);
            }
        };
        getMovie();
    }, [movieId]);
    useEffect(() => {
        sessionStorage.setItem(movieId, JSON.stringify(state));
    }, [movieId, state]);
    return { state, loading, error };
};
