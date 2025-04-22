import { useState, useEffect } from "react";

import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { useAuthStore } from "../store/useAuthStore";

"use strict";

export function useAuth() {
    const user       = useAuthStore((state) => state.user);
    const setUser    = useAuthStore((state) => state.setUser);
    const loading    = useAuthStore((state) => state.loading);
    const setLoading = useAuthStore((state) => state.setLoading);
    const error      = useAuthStore((state) => state.error);
    const setError   = useAuthStore((state) => state.setError);
    
    const [errorTimeOut, setErrorTimeOut] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscribe();
    }, []);

    /**
     * @function errorHandler
     * @description Handle errors related to firebase auth API
     * @param {object} error Firebase error
     * @returns undefined
     */
    const errorHandler = (error) => {
        if (errorTimeOut)
            clearTimeout(errorTimeOut);

        setError(error.message);

        const timeOut = setTimeout(() => {
            setError("");
            setErrorTimeOut(null);
        }, 4000);

        setErrorTimeOut(timeOut);
    }

    /**
     * @function login
     * @description Use firebase auth API to log in.
     * @param {string} email User email
     * @param {string} password User password
     * @returns undefined
     */
    const login = async (email, password) => {
        try {
            setError("");
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            errorHandler(error);
        }
    };
    
    /**
     * @function logout
     * @description Use firebase auth API to log out.
     * @returns undefined
     */
    const logout = async () => {
        try {
            setError("");
            await signOut(auth);
        } catch (error) {
            errorHandler(error);
        }
    };

    return { user, loading, error, login, logout };
}
