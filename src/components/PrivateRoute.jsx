import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Loading from './Loading';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <Loading />
    }

    if(user){
        return children;
    }

    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;