import { MovieScreen } from './pages/MovieScreen/MovieScreen';
import { Navbar } from './ui/Navbar/Navbar';

function App() {
    return (
        <>
            <Navbar />
            <MovieScreen id={2} />
        </>
    );
}

export default App;
