import { Link } from 'react-router-dom';
import { moviesImages } from '../../helpers/moviesImages';

import './moviecard.css';

export const MovieCard = ({ movie }) => {
    const { id, title, releaseDate, poster } = movie;
    return (
        <>
            <article className='card-movie'>
                <Link to={`/movie/${id}`}>
                    <section className='card-movie__picture'>
                        <img
                            src={moviesImages(`./${poster}`)}
                            alt='Star Wars'
                        />
                    </section>
                    <section className='card-movie__content'>
                        <h4 className='card-title'>{title}</h4>
                        <p className='card-text'>
                            <span>
                                <b>Release Date: </b>
                                {releaseDate}
                            </span>
                        </p>
                    </section>
                </Link>
            </article>
        </>
    );
};
