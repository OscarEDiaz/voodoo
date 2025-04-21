import { useState, useEffect } from "react";

import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

"use strict";

export function useAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Detecta si el usuario está logueado al cargar la app
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscribe();
    }, []);

    const login = async (email, password, setError) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log("error", {error});
            setError(error.message);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error(error);
        }
    };

    return { user, loading, login, logout };
}
