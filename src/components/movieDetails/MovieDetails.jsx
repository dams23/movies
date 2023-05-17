import { Link } from 'react-router-dom';
import './moviedetails.css';
import { MoviePlayer } from '../moviePlayer/MoviePlayer';
import { Loader } from '../loader/Loader';
import { useEffect, useState } from 'react';
export const MovieDetails = ({
    id,
    duration,
    director,
    description,
    genres = [],
    title,
    trailer,
}) => {
    const [list, setList] = useState(false);
    const [view, setView] = useState(false);
    const [loading, setLoading] = useState(false);
    const user = localStorage.getItem('user');
    const handleViewMovie = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setView(true);
            setLoading(false);
        }, 2000);
    };
    const handleAddToList = (e) => {
        e.preventDefault();
        setList(true);
        let userLocal = JSON.parse(user);
        userLocal.myList.push({
            id: id,
            addedAt: new Date()
                .toISOString()
                .split('T')[0]
                .toString()
                .replaceAll('-', '/'),
        });
        localStorage.setItem('user', JSON.stringify(userLocal));
    };
    useEffect(() => {
        if (user) {
            const { myList } = JSON.parse(user);
            if (myList.length > 0 && myList !== undefined) {
                myList.map((m) => {
                    if (m.id === id) {
                        setList(true);
                    }
                });
            }
        }
    });

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
                    {list ? (
                        <button
                            className='btn-addtolist'
                            onClick={handleViewMovie}>
                            <i className='bx bx-movie-play'></i>Play
                        </button>
                    ) : user ? (
                        <button
                            className='btn-addtolist'
                            onClick={handleAddToList}>
                            <i className='bx bx-list-plus'></i>Add to my list
                        </button>
                    ) : (
                        <></>
                    )}
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
