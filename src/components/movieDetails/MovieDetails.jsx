import { Link } from 'react-router-dom';

export const MovieDetails = ({ duration, director, description, genres=[]}) => {
    
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
            
        </>
    );
};
