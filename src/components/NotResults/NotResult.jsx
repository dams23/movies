import './notResult.css';
export const NotResult = () => {
    return (
        <div className='notResult'>
            <img src={'../assets/notFound.svg'} alt='not found movie' />
            <h1>Notting to show...</h1>
            <p>
                Parece que buscaste alguna pelicula que no se encuentra en
                nuestros registros Intenta buscar otra pelicula
            </p>
        </div>
    );
};
