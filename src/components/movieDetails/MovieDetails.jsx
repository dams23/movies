import { Link } from 'react-router-dom';
import './moviedetails.css';
import { MoviePlayer } from '../moviePlayer/MoviePlayer';
import { Loader } from '../loader/Loader';
import { useState } from 'react';
export const MovieDetails = ({
    duration,
    director,
    description,
    genres = [],
    title,
    trailer,
}) => {
    const [view, setView] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleViewMovie = (e) =>{
        e.preventDefault();
        setLoading(true);
        setTimeout(() =>{
            setView(true);
            setLoading(false);
        }, 2000);
    }
    return (
        <>
            <article className='movie-container'>
                <header className='movie-container__header'>
                    <span>
                        <b>Duration: </b> {duration}m
                    </span>
                    <span>
                        <b>Director:</b> {director}
                    </span>
                </header>
                <main>
                    <p>{description}</p>
                </main>
                <section className='buttons-container'>
                    <button className='btn-addtolist'>
                        <i class='bx bx-list-plus'></i>Add to my list
                    </button>
                    <button className='btn-addtolist' onClick={handleViewMovie}>
                    <i class='bx bx-movie-play'></i>Play
                    </button>
                </section>
                <footer>
                    <p>
                        <b>Genres</b>
                    </p>
                    <ul>
                        {genres.map((g) => (
                            <li key={g.id}>
                                <Link
                                    to={`/genres/${g.id}`}
                                    className='btn-genres'>
                                    {g.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </footer>
            </article>
            {loading ? (
                <Loader />
            ) : view ? (
                <MoviePlayer title={title} trailer={trailer} />
            ) : (
                <></>
            )}
        </>
    );
};
