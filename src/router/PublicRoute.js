
import {  Navigate, useLocation } from 'react-router-dom';


export const PublicRoute = ({
    children
}) =>{
    const { state } =  useLocation();
    return (!state.logged) 
    ? children
    : <Navigate to='/' />
}
