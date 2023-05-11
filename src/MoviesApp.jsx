import { MovieCover } from './components/movies/MovieCover';
import { NotFound } from './pages/NotFound/NotFound';
import { SearchScreen } from './pages/SearchScreen/SearchScreen';
import { Navbar } from './ui/Navbar/Navbar';

function App() {
    return (
        <>
            <Navbar />
            <SearchScreen />
        </>
    );
}

export default App;
