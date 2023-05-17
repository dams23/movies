import { MovieCard } from '../movieCard/MovieCard';
import { getMovieById } from '../../selectors/getMovieById';
import './myList.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const MyList = () => {
    const [list, setList] = useState([]);
    const user = localStorage.getItem('user');
    const { myList } = JSON.parse(user);
    useEffect(() => {
        setList(myList);
    },[]);
    if (user === undefined) {
        return <></>;
    }
    return myList.length === 0 ? (
        <></>
    ) : (
        <section className='movies__container'>
            <Link to='./myList'>
                <h1>My List</h1>
            </Link>
            <span className='divisor'></span>
            <div className='movies__list'>
                {list.map((m) => (
                    <MovieCard key={m.id} movie={getMovieById(m.id)}  />
                ))}
            </div>
        </section>
    );
};
