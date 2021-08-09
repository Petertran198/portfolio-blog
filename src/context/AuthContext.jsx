import React, { useState, useContext, useEffect } from 'react';
import { auth } from '../firebase/Firebase';

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    const signUp = (email, password) => {
        //return promise if successful will sign up, so you got to async/await when used in different files
        return auth.createUserWithEmailAndPassword(email, password);
    };
    const hello = () => {
        return console.log('hi');
    };
    const value = {
        currentUser,
        signUp,
        hello,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
