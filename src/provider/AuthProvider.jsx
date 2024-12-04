import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../firebase/Firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    
    const provider = new GoogleAuthProvider();

    // New User Register
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // User Login
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google LogIn
    const loginWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }


    const authInfo = {
        name: 'Masud',
        loginWithGoogle,
        userLogin,
        createNewUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;