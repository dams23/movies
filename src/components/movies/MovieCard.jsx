import { Link } from 'react-router-dom';

export const MovieCard = ({
    id,
    title,
    description,
    genres,
    releaseDate,
    poster,
    trailer,
}) => {
    const posterImageUrl = `../../assets/${poster}`;

    const trailerUrl = `https://youtu.be/${trailer}`;

    return (
        <>
            <article>
                <section className='card-poster'>
                    <img src={posterImageUrl} alt={title} />
                </section>
                <section className='card-info'>
                    <div className='card-info-header'>
                        <h1>{title}</h1>
                        <span>{releaseDate}</span>
                    </div>
                    <div className='card-details'>
                        <ul>
                            {genres.map((genre) => (
                                <li>{genre.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='card-info-desc'>
                      {description}
                    </div>
                </section>
            </article>
        </>
    );
};
