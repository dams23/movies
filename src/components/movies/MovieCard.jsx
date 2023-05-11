import { Link } from 'react-router-dom';
import { moviesImages } from '../../helpers/moviesImages';

import './moviecard.css';

export const MovieCard = ({ movie }) => {
    const { id, title, description, releaseDate, poster } = movie;
    return (
        <>
            <article className='card-movie'>
                <section className='card-movie__picture'>
                    <img
                        src={moviesImages(`./${poster}`)}
                        className='img-fluid'
                        alt='Star Wars'
                    />
                </section>
                <section className='col-md-8'>
                    <div className='card-body'>
                        <h3 className='card-title'>{title}</h3>
                        <p className='card-text'>
                            <span className='text-muted'>
                                <b>Release Date: </b>
                                {releaseDate}
                            </span>
                        </p>
                        <p className='card-text'>{description}</p>
                        <Link to={`./movies/${id}`}>Leer más</Link>
                    </div>
                </section>
            </article>
        </>
    );
};
