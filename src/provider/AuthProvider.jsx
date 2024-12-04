import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/Firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    // console.log(user);
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

    // User Log Out
    const userLogOut = () => {
        return signOut(auth);
    }
    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        createNewUser,
        loginWithGoogle,
        userLogin,
        userLogOut,
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;