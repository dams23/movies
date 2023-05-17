import { MovieCard } from '../../components/movieCard/MovieCard';
import { NotResult } from '../../components/NotResults/NotResult';
import { getMovieById } from '../../selectors/getMovieById';

export const MyListScreen = () => {
    const user = localStorage.getItem('user');
    if (user === undefined) {
        return <></>;
    }
    const { myList } = JSON.parse(user);
    return myList.length === 0 ? (
        <NotResult />
    ) : (
        <section className='movies__container'>
            <div className='movies__list'>
                {myList.map((m) => (
                    <MovieCard key={m.id} movie={getMovieById(m.id)} addedAt={m.addedAt} />
                ))}
            </div>
        </section>
    );
};
