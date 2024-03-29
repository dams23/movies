import { Link } from 'react-router-dom';
import { FeaturedMovie } from '../../components/featuredMovie/FeaturedMovie';
import { MovieGenre } from '../../components/movieGenre/MovieGenre';
import { genres } from '../../data/genres';
import { movies } from '../../data/movies';

import './homeScreen.css';
import { MyList } from '../../components/MyList/MyList';

export const HomeScreen = () => {
    const user = localStorage.getItem('user');
    return (
        <>
            <Link to={`./movie/${movies[0].id}`}>
                <FeaturedMovie movie={movies[0]} />
            </Link>
            {user ? <MyList /> : <></>}
            {genres.map((g) => (
                <MovieGenre key={g.id} genre={g} />
            ))}
        </>
    );
};
