import './movies.css';
import { moviesImages } from '../../helpers/moviesImages';

export const MovieCover = ({ poster='', title='no carga', releaseDate='' }) => {
    const style = {
            width: '100%',
        height: '50vh',
        backgroundImage: `url(${moviesImages(`./${poster}`)})`,

        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backdropFilter: `blur('4px')`,
    };
    return (
        <>
            <div className='cover-movie' style={style}>
                <div className='cover-movie__header'>
                    <h1>{title}</h1>
                    <span>
                        <b>Release: </b>
                        <small>{releaseDate}</small>
                    </span>
                </div>
            </div>
        </>
    );
};
