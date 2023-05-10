import { Link, NavLink } from 'react-router-dom';
import './moviecard.css';
import { genres } from '../../data/genres';
import { moviesImages } from '../../helpers/moviesImages';

export const MovieCard = ({
    id,
    title,
    description,
    releaseDate,
    poster,
    trailer,
}) => {
    const posterImageUrl = `../../assets/${poster}`;

    const trailerUrl = `https://youtu.be/${trailer}`;

    return (
        <>
            <article className='card-movie'>
                <section className='card-movie__picture'>
                    <img
                        src={moviesImages(`./starwarsV.jpg`)}
                        className='img-fluid'
                        alt='Star Wars'
                    />
                </section>
                <section className='col-md-8'>
                    <div className='card-body'>
                        <h3 className='card-title'>
                            Star Wars Episode IV, A new hope
                        </h3>
                        <p className='card-text'>
                            <smal className='text-muted'>
                                <b>Release Date: </b>1977/05/25
                            </smal>
                        </p>
                        <p className='card-text'>
                            Princess Leia is captured and held hostage by the
                            evil Imperial forces in their effort to take over
                            the galactic Empire. Venturesome Luke Skywalker and
                            dashing captain Han Solo team together with the
                            loveable robot duo R2-D2 and C-3PO to rescue the
                            beautiful princess and restore peace and justice in
                            the Empire.
                        </p>
                        <Link to={`./movies/${id}`}>Leer más</Link>
                    </div>
                </section>
            </article>
        </>
    );
};
