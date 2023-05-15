import './moviePlayer.css';

export const MoviePlayer = ({ title, trailer }) => {
    return (
        <>
            <div className='video-responsive'>
                <iframe
                    src={`https://www.youtube.com/embed/${trailer}`}
                    allowFullScreen
                    title={title}
                />
            </div>
        </>
    );
};
