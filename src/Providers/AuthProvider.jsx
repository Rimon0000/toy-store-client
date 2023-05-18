import React, { createContext, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    //registration
    const createUser =(email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login
    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    //sign out
    const logOut = () =>{
        return signOut(auth)
    }

    //google login
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
     }

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        googleLogin,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;