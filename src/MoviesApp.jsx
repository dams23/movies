import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserProvider from './context/context';
import { HomeScreen } from './pages/HomeScreen/HomeScreen';
import { Navbar } from './components/Navbar/Navbar';
import { AppRouter } from './router/AppRouter';

function App() {
    return (
        <>
            <AppRouter />
        </>
    );
}

export default App;
