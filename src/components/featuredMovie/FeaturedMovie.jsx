import { moviesImages } from '../../helpers/moviesImages';
import './featuredMovie.css';

export const FeaturedMovie = ({ movie }) => {
    const backgroundImage = {
        display: 'flex',
        height: '50vh',
        backgroundImage: `url(${moviesImages(`./${movie.poster}`)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        alignItems: 'center',
        alignText: 'center',
        justifyContent: 'center',
        color: '#ffffff',
    };
    return (
        <div>
            <div style={backgroundImage}>
                <div className='featured-movie'>
                    <h1>{movie.title}</h1>
                    <span>
                        <b>Duration: </b>{movie.duration} minutes
                    </span>
                </div>
            </div>
        </div>
    );
};
