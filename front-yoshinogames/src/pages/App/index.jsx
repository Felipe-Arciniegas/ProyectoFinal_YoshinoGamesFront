import { useRoutes, BrowserRouter } from 'react-router-dom'
import Navbar from './../../components/Navbar'
import Home from './../Home'
import Login from './../Login'
import Register from './../Register'
import Store from './../Store'
import './App.css'

const AppRoutes = () => {
    return useRoutes([
        {path: '/', element: <Home />},
        {path: '/login', element: <Login />},
        {path: '/register', element: <Register />},
        {patch: '/store', element: <Store />}
    ])
}
const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <AppRoutes />
        </BrowserRouter>
    );
};

export default App;
