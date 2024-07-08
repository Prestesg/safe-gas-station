import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import {Outlet, Navigate} from 'react-router-dom';

const AuthMiddleware = () => {
    const { isAuthenticated } = useContext(AuthContext);
    return isAuthenticated? <Outlet/>:<Navigate to={"/"}/>;
}

export default AuthMiddleware;