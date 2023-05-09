import { Provider } from 'react-redux';
import { LoginPage } from './components/auth/LoginPage';
import { store } from './store/store'

function App() {
    return (
        <Provider store={store}>
            <LoginPage />
        </Provider>
    );
}

export default App;
