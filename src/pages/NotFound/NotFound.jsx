import { useForm } from '../../hooks';
import './notfound.css';

export const NotFound = () => {
    const [formValue, handleInputChange] = useForm({
        search: '',
    });
    const { search } = formValue;
    const handleSearch = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <main className='notFound-container'>
                <h1 className='notFound-title'>404</h1>
                <p>
                    parece que algo que buscaste no existe... por que no
                    intentas volver a buscar..
                </p>
                <form onSubmit={handleSearch}>
                    <div className='form-group'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Busca algo...'
                            name='search'
                            value={search}
                            onChange={handleInputChange}
                        />
                        <button
                            type='submit'
                            onClick={handleSearch}
                            className='btnSearch'>
                            <i className='bx bx-search-alt'></i>
                        </button>
                    </div>
                </form>
            </main>
        </>
    );
};
