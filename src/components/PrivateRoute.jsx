import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Loading from './Loading';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);

    if(loading){
        return <Loading />
    }

    if(user){
        return children;
    }

    return <Navigate to={'/login'} state={location?.pathname} ></Navigate>
};

export default PrivateRoute;