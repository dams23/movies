import './moviePlayer.css';

export const MoviePlayer = ({movie}) => {
    return (
        <>
            <div className='video-responsive'>
                <iframe
                    src={`https://www.youtube.com/embed/${movie.trailer}`}
                    allowFullScreen
                    title={movie.title}
                />
            </div>
        </>
    );
};
