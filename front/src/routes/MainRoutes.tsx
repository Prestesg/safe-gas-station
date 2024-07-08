import { BrowserRouter,Routes,Route,Outlet } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AuthMiddleware from './middlewares/AuthMiddleware';
import MainPage from '../pages/MainPage';
import Header from '../components/Header';

const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={(<><Outlet/></>)} >
                    <Route path="/" element={<HomePage/>}/>
                </Route>
                <Route element={(<><Header/><AuthMiddleware/></>)} >
                    <Route path="/main" element={<MainPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes;