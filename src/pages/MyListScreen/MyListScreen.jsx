import { Link } from 'react-router-dom';
import { MovieCard } from '../../components/movieCard/MovieCard';
import { getMovieById } from '../../selectors/getMovieById';

export const MyListScreen = () => {
  const user = localStorage.getItem('user');
    const { myList } = JSON.parse(user);
    console.log(myList.length);
    return myList.length === 0 ? (
        <></>
    ) : (
        <section className='movies__container'>
            <Link to='./myList'>
                <h1>My List</h1>
            </Link>
            <span className='divisor'></span>
            <div className='movies__list'>
                {myList.map((m) => (
                    <MovieCard key={m.id} movie={getMovieById(m.id)} />
                ))}
            </div>
        </section>
    );
}
